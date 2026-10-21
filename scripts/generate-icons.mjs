import { deflateSync } from 'node:zlib'
import { readFileSync, writeFileSync } from 'node:fs'

const crcTable = Array.from({ length: 256 }, (_, value) => {
  let crc = value
  for (let bit = 0; bit < 8; bit += 1) crc = (crc & 1) ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1
  return crc >>> 0
})

function crc32(buffer) {
  let crc = 0xffffffff
  for (const byte of buffer) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const name = Buffer.from(type)
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const checksum = Buffer.alloc(4)
  checksum.writeUInt32BE(crc32(Buffer.concat([name, data])))
  return Buffer.concat([length, name, data, checksum])
}

function renderIcon(size, output) {
  const rowSize = size * 4 + 1
  const pixels = Buffer.alloc(rowSize * size)
  const blue = [49, 91, 125, 255]
  const paper = [247, 242, 232, 255]
  const glyphs = {
    T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
    S: ['11111', '10000', '10000', '11111', '00001', '00001', '11111']
  }
  const margin = Math.floor(size * 0.2)
  const block = Math.max(2, Math.floor(size * 0.035))
  const textWidth = 11 * block
  const textX = Math.floor((size - textWidth) / 2)
  const textY = Math.floor(size * 0.39)

  for (let y = 0; y < size; y += 1) {
    pixels[y * rowSize] = 0
    for (let x = 0; x < size; x += 1) {
      let color = x >= margin && x < size - margin && y >= margin && y < size - margin ? paper : blue
      for (const [index, letter] of ['T', 'S'].entries()) {
        const localX = x - textX - index * 6 * block
        const localY = y - textY
        const column = Math.floor(localX / block)
        const line = Math.floor(localY / block)
        if (line >= 0 && line < 7 && column >= 0 && column < 5 && glyphs[letter][line][column] === '1') color = blue
      }
      const offset = y * rowSize + 1 + x * 4
      pixels.set(color, offset)
    }
  }

  const header = Buffer.alloc(13)
  header.writeUInt32BE(size, 0)
  header.writeUInt32BE(size, 4)
  header.set([8, 6, 0, 0, 0], 8)
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  writeFileSync(output, Buffer.concat([
    signature,
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(pixels)),
    chunk('IEND', Buffer.alloc(0))
  ]))
}

renderIcon(192, 'public/icons/icon-192.png')
renderIcon(512, 'public/icons/icon-512.png')
renderIcon(180, 'public/icons/apple-touch-icon.png')

const faviconPng = readFileSync('public/icons/icon-192.png')
const iconHeader = Buffer.from([0, 0, 1, 0, 1, 0])
const iconEntry = Buffer.alloc(16)
iconEntry.set([192, 192, 0, 0], 0)
iconEntry.writeUInt16LE(1, 4)
iconEntry.writeUInt16LE(32, 6)
iconEntry.writeUInt32LE(faviconPng.length, 8)
iconEntry.writeUInt32LE(iconHeader.length + iconEntry.length, 12)
writeFileSync('app/favicon.ico', Buffer.concat([iconHeader, iconEntry, faviconPng]))
