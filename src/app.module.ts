import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { Client } from 'pg';
@Module({
  imports: [AuthModule, CartModule, OrderModule],
  controllers: [AppController],
  providers: [
    {
      provide: Client,
      useFactory: () => {
        return new Client({
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          port: 5432,
          database: 'db1',
        });
      },
    },
  ],
})
export class AppModule {}
