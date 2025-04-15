import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as { id: string; message: string }[];

    if (messages[id]) {
      return messages[id];
    }
    return null;
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as { id: string; message: string }[];
    if (messages) {
      return messages;
    }
    return [];
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const newId = Math.floor(Math.random() * 10000).toString();
    const messages = JSON.parse(contents) as { id: string; message: string }[];

    const newMessage = {
      id: newId,
      message,
    };
    const newContent = {
      ...messages,
      [newId]: newMessage,
    };
    await writeFile('messages.json', JSON.stringify(newContent, null, 2));
    return newMessage;
  }
}
