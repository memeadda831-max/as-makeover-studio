import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const src = '/home/ubuntu/workspace/.platform/attachments';
const dest = '/home/ubuntu/workspace/app/src/frontend/public/assets/images';

mkdirSync(dest, { recursive: true });

const files = [
  ['whatsapp_image_2026-05-07_at_1.32.04_pm-019e01ba-a2a5-75a2-821b-fbfa524d1cbb.jpeg', 'work1.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.32.36_pm-019e01ba-a2d9-72dc-a2c0-72fb49312a26.jpeg', 'work2.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.32.03_pm-019e01ba-a307-74a9-abb0-6b616c75fe91.jpeg', 'work3.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.32.37_pm-019e01ba-a914-7492-94f8-4d3d5e439cd4.jpeg', 'work4.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.29.15_pm-019e01ba-a9ce-758a-af37-f79a851218c4.jpeg', 'work5.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.29.14_pm_1-019e01ba-ac57-7409-8f0c-31d1dac65702.jpeg', 'work6.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.29.16_pm-019e01ba-ac99-72ce-ab85-cb843baa483d.jpeg', 'work7.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.29.56_pm-019e01ba-aca7-7410-8451-d69637e77bec.jpeg', 'work8.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.28.30_pm-019e01ba-acab-776f-8be0-a8917eead210.jpeg', 'work9.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.31.12_pm-019e01ba-acd4-729c-b30a-379fdfc5144d.jpeg', 'work10.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.29.13_pm-019e01ba-acc0-740a-bb91-f83cb7f23395.jpeg', 'work11.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.31.12_pm_1-019e01ba-ad7a-761a-9d4d-d7d0ec1c5e11.jpeg', 'work12.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.29.56_pm_1-019e01ba-ad90-7615-b693-c72a46918aeb.jpeg', 'work13.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.29.14_pm-019e01ba-adaa-741a-877f-e6b418be5302.jpeg', 'work14.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.32.34_pm-019e01ba-ad02-742d-a47f-dc08b2b7e071.jpeg', 'work15.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.33.23_pm-019e01ba-af18-71a8-9f9e-f54cda33d5db.jpeg', 'owner.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.32.35_pm-019e01ba-af91-70d5-bb94-a2811fcfe373.jpeg', 'work16.jpeg'],
  ['whatsapp_image_2026-05-07_at_1.32.36_pm_1-019e01ba-b089-704c-9e70-1b9824dbbeb6.jpeg', 'work17.jpeg'],
];

for (const [from, to] of files) {
  try {
    copyFileSync(join(src, from), join(dest, to));
    console.log(`Copied ${to}`);
  } catch (e) {
    console.error(`Failed to copy ${to}:`, e.message);
  }
}
console.log('Done!');
