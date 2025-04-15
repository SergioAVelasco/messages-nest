import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesService) {}

  @Get()
  async listMessages() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    console.log('message', message);
    if (!message) {
      console.log('Not working');
      //is not working :s
      throw new NotFoundException('message not found');
    }
    return message;
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }
}
