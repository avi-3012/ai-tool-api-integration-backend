import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Injectable } from '@nestjs/common';
import {v2 as cloudinary} from 'cloudinary';

@Injectable()
export class AdminService {
  constructor(private configService: ConfigService) {}
  async editImage(image, data): Promise<any> {
    const url = "https://api.claid.ai/v1-beta1/image/edit" // claid.ai edit image api url
    const file = await cloudinary.uploader.upload(image); // Upload image to cloudinary
    const imageUrl = file.secure_url;
    const payload = {
      input: imageUrl, // Image url
      operations: data.operations, // Editing Operations
    }
    // Try to make edit image request to claid.ai
    try {
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${process.env.APIKEY}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
      console.log(response.data);
      
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      return null;
    }
  }
}
