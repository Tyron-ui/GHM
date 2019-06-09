import * as SocketIO from 'socket.io'

import { SOCKET } from '../types';

import config from '../config'

const io = SocketIO().listen(config.socketIoPort)

export const socketPath = '/socket'

io.on('connection', (socket) => {
  io.of(socketPath).emit('connected')
})

export const dispatchSocket = (
  method: SOCKET,
  data: any
) => {
  io.of(socketPath).emit(method, data)
}