import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'This action returns all messages';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    return { id };
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return body;
  }
}
