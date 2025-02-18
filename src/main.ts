import 'module-alias/register';
import DemoUtils from '@/utils/demo.utils';

const main = async () => {
  const demoValue = DemoUtils.getDemoValue();
  console.log(`${demoValue}!!`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log('Hello, World!');
};

main().catch(console.error);
