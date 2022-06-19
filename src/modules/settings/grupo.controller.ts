import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';
import { Settings } from 'http2';
import { SettingsDto } from './dto/settings.dto';
import { SettingsService } from './settings.service';

@ApiTags('Grupo')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@Controller('grupo')
export class GrupoController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @HttpCode(HttpStatus.OK)
  public async index(): Promise<Settings[]> {
    return this.settingsService.index();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string) {
    return this.settingsService.show(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async store(@Body() settingsDto: SettingsDto): Promise<Settings> {
    return this.settingsService.store(settingsDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  public async update(
    @Param('id') id: String,
    @Body() settingsDto: SettingsDto,
  ): Promise<Settings> {
    return this.settingsService.update(settingsDto, id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async delete(@Param('id') id: string) {
    return this.settingsService.delete(id);
  }
}
