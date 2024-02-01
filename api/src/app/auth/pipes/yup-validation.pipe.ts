import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Schema } from 'yup';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  async transform(data: unknown) {
    try {
      const parsedData = await this.schema.validate(data, { abortEarly: false });
      return parsedData;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
