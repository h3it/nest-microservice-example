import { Module } from '@nestjs/common';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { PublishersModule } from './modules/publishers/publishers.module';
import { SubcribersModule } from './modules/subcribers/subcribers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './modules/config/config.service';
const configService = new ConfigService(`.env.${process.env.NODE_ENV}`);

@Module({
  imports: [
    MongooseModule.forRoot(configService.get('MONGODB_URL')),
    TransactionsModule,
    PublishersModule,
    SubcribersModule,
  ],
})
export class ApplicationModule {}
