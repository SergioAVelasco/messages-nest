import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

interface Repository {
  findOne(id: string): Promise<string>;
  findAll(): Promise<string[]>;
  create(content: string): Promise<string>;
}

@Injectable()
export class MessagesService {
  constructor(public messagesRepository: MessagesRepository) {}

  async findOne(id: string) {
    const message = await this.messagesRepository.findOne(id);

    return message;
  }
  async findAll() {
    const messages = await this.messagesRepository.findAll();

    return messages;
  }
  async create(message: string) {
    const newMessage = await this.messagesRepository.create(message);

    return newMessage;
  }
}
