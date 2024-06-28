import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nota } from './entities/nota.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        entities: [Nota],
        synchronize: true,
        host: configService.get<string>( 'DB_HOST' ),
        port: configService.get<number>( 'DB_PORT' ),
        username: configService.get<string>( 'DB_USER' ),
        password: configService.get<string>( 'DB_PASSWORD' ),
        database: configService.get<string>( 'DB_NAME' ),
        ssl: false,
      }),
    }),
    TypeOrmModule.forFeature([Nota]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
