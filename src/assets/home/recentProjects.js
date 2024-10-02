import img1_before from '../home/project_images/img1_before.webp';
import img1_after from '../home/project_images/img1_after.webp';
import img2_before from '../home/project_images/img2_before.webp';
import img2_after from '../home/project_images/img2_after.webp';
import img3_before from '../home/project_images/img3_before.webp';
import img3_after from '../home/project_images/img3_after.webp';
import img4_before from '../home/project_images/img4_before.webp';
import img4_after from '../home/project_images/img4_after.webp';
import img5_before from '../home/project_images/img5_before.webp';
import img5_after from '../home/project_images/img5_after.webp';

const recentProjects = [
  {
    suburb: 'Caddens',
    type: 'Spray-Crete ',
    details: [
      'Gunmetal Base Colour',
      'Black and White Flake',
      '1.5m x 1.5m Square Box',
      '2 Coat Sealer',
    ],
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
    suburb: 'Oran Park',
    type: 'Epoxy Flooring',
    details: [
      'Bluestone base colour',
      'Cookie Cream Flake',
      '2 Coat Epoxy Sealer',
    ],
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
    suburb: 'Austral',
    type: 'Spray-Crete',
    details: [
      'Gunmetal Base Colour',
      'Black and White Flake',
      '1m x 1m Square Box',
      '2 Coat Sealer',
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
  {
    suburb: 'Harrington Park',
    type: 'Spray-Crete',
    details: [
      'Gunmetal base colour',
      'White Flake',
      'Diamond Tile Box',
      '2 Coat Epoxy Sealer',
    ],
    imgBefore: {
      source: img4_before,
      name: 'Before',
    },
    imgAfter: {
      source: img4_after,
      name: 'After',
    },
  },
  {
    suburb: 'Granville',
    type: 'Epoxy Flooring',
    details: [
      'Bluestone base colour',
      'Cookie Cream Flake',
      '2 Coat Epoxy Sealer',
    ],
    imgBefore: {
      source: img5_before,
      name: 'Before',
    },
    imgAfter: {
      source: img5_after,
      name: 'After',
    },
  },
];

export default recentProjects;
