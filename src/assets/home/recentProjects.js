import img1_before from '../home/project_images/img1_before.jpg';
import img1_after from '../home/project_images/img1_after.jpg';
import img2_before from '../home/project_images/img2_before.jpg';
import img2_after from '../home/project_images/img2_after.jpg';
import img3_before from '../home/project_images/img3_before.jpg';
import img3_after from '../home/project_images/img3_after.jpg';

const recentProjects = [
  {
    suburb: 'St Clair',
    type: 'Epoxy Flooring',
    details: ['bluh bluh', 'bluh bluh', 'bluh bluh'],
    imgBefore: {
      source: img1_before,
      name: 'Before',
    },
    imgAfter: {
      source: img1_after,
      name: 'After',
    },
  },
  {
    suburb: 'Caddens',
    type: 'Spray-Crete Floor',
    details: ['bluh bluh', 'bluh bluh', 'bluh bluh'],
    imgBefore: {
      source: img2_before,
      name: 'Before',
    },
    imgAfter: {
      source: img2_after,
      name: 'After',
    },
  },
  {
    suburb: 'Marsden Park',
    type: 'Spray-Crete Floor',
    details: [
      'Slate grey colour ',
      'White spots overlay',
      '2 Cotts of Deleux sealing',
    ],
    imgBefore: {
      source: img3_before,
      name: 'Before',
    },
    imgAfter: {
      source: img3_after,
      name: 'After',
    },
  },
];

export default recentProjects;
