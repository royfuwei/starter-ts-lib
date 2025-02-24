import 'module-alias/register';
import DemoUtils from '@/utils/demo.utils';
import { configs } from './configs';

const main = async () => {
  const demoValue = DemoUtils.getDemoValue();
  console.log(`APP_NAME: ${configs.name}`);
  console.log(`NODE_ENV: ${configs.env}`);
  console.log(`${demoValue}!!`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log('Hello, World!');
};

main().catch(console.error);
