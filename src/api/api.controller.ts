import { Controller, Post, Req } from '@nestjs/common';
import { AdminService } from './api.service';

@Controller('/')
export class ApiController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async operation(@Req() req) {
    console.log(req.body);
    const response = await this.adminService.editImage(req.body.image, req.body);
    if (response) {
      return { message: 'success', data: response };
    }
    return { message: 'failed' };
  }
}
