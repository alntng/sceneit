const bestPicture = [
  {
    popularity: 75.393,
    vote_count: 1041,
    video: false,
    poster_path: '/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg',
    id: 359724,
    adult: false,
    backdrop_path: '/n3UanIvmnBlH531pykuzNs4LbH6.jpg',
    original_language: 'en',
    original_title: 'Ford v Ferrari',
    genre_ids: [28, 18, 36],
    title: 'Ford v Ferrari',
    vote_average: 7.8,
    overview:
      'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',
    release_date: '2019-11-13'
  },
  {
    popularity: 55.411,
    vote_count: 2326,
    video: false,
    poster_path: '/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg',
    id: 398978,
    adult: false,
    backdrop_path: '/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg',
    original_language: 'en',
    original_title: 'The Irishman',
    genre_ids: [80, 18, 36],
    title: 'The Irishman',
    vote_average: 7.8,
    overview:
      'Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.',
    release_date: '2019-11-01'
  },
  {
    popularity: 84.984,
    vote_count: 865,
    video: false,
    poster_path: '/7GsM4mtM0worCtIVeiQt28HieeN.jpg',
    id: 515001,
    adult: false,
    backdrop_path: '/agoBZfL1q5G79SD0npArSlJn8BH.jpg',
    original_language: 'en',
    original_title: 'Jojo Rabbit',
    genre_ids: [35, 18, 10752],
    title: 'Jojo Rabbit',
    vote_average: 8.1,
    overview:
      'A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.',
    release_date: '2019-10-18'
  },
  {
    popularity: 61.403,
    vote_count: 740,
    video: false,
    poster_path: '/mSmiB8XjUnR1GSIljuCPGsk0cwX.jpg',
    id: 331482,
    adult: false,
    backdrop_path: '/3uTxPIdVEXxHpsHOHdJC24QebBV.jpg',
    original_language: 'en',
    original_title: 'Little Women',
    genre_ids: [18, 10749],
    title: 'Little Women',
    vote_average: 8,
    overview:
      'Four sisters come of age in America in the aftermath of the Civil War.',
    release_date: '2019-12-25'
  },
  {
    popularity: 50.557,
    vote_count: 2069,
    video: false,
    poster_path: '/pZekG6xabTmZxjmYw10wN84Hp8d.jpg',
    id: 492188,
    adult: false,
    backdrop_path: '/nwoDC0IJA47wr3znJgT1kkk64Gy.jpg',
    original_language: 'en',
    original_title: 'Marriage Story',
    genre_ids: [18],
    title: 'Marriage Story',
    vote_average: 8,
    overview:
      'A stage director and an actress struggle through a grueling, coast-to-coast divorce that pushes them to their personal extremes.',
    release_date: '2019-11-06'
  },
  {
    popularity: 242.507,
    vote_count: 1267,
    video: false,
    poster_path: '/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg',
    id: 530915,
    adult: false,
    backdrop_path: '/ds9GKAMhxv5AbprmZ2xCpK8FiEG.jpg',
    original_language: 'en',
    original_title: '1917',
    genre_ids: [28, 18, 36, 10752],
    title: '1917',
    vote_average: 8.1,
    overview:
      "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
    release_date: '2019-12-10'
  },
  {
    popularity: 82.417,
    vote_count: 4264,
    video: false,
    poster_path: '/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg',
    id: 466272,
    adult: false,
    backdrop_path: '/yB2hTgz9CTVYjlMWPSl3LPx5nWj.jpg',
    original_language: 'en',
    original_title: 'Once Upon a Time… in Hollywood',
    genre_ids: [35, 18, 53],
    title: 'Once Upon a Time… in Hollywood',
    vote_average: 7.5,
    overview:
      'Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…',
    release_date: '2019-07-25'
  },
  {
    popularity: 82.417,
    vote_count: 4264,
    video: false,
    poster_path: '/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg',
    id: 466272,
    adult: false,
    backdrop_path: '/yB2hTgz9CTVYjlMWPSl3LPx5nWj.jpg',
    original_language: 'en',
    original_title: 'Once Upon a Time… in Hollywood',
    genre_ids: [35, 18, 53],
    title: 'Once Upon a Time… in Hollywood',
    vote_average: 7.5,
    overview:
      'Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…',
    release_date: '2019-07-25'
  }
]

const leadActor = [
  {
    popularity: 5.538,
    known_for_department: 'Acting',
    gender: 2,
    id: 3131,
    profile_path: '/l39A8Anyhs3iFiW6UVoIhogAldM.jpg',
    adult: false,
    known_for: [
      {
        release_date: '2004-05-19',
        id: 809,
        vote_count: 7005,
        video: false,
        media_type: 'movie',
        vote_average: 7,
        title: 'Shrek 2',
        genre_ids: [12, 16, 35, 14, 10751],
        original_title: 'Shrek 2',
        original_language: 'en',
        adult: false,
        backdrop_path: '/gdFAYLb5NR5HqcEKnPloOM6fX4B.jpg',
        overview:
          "Shrek, Fiona and Donkey set off to Far, Far Away to meet Fiona's mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there's tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage.",
        poster_path: '/eVBH2nDYbLWiUXYotADRAWK6sm6.jpg'
      },
      {
        release_date: '2007-05-17',
        id: 810,
        vote_count: 5388,
        video: false,
        media_type: 'movie',
        vote_average: 6.2,
        title: 'Shrek the Third',
        genre_ids: [12, 16, 35, 14, 10751],
        original_title: 'Shrek the Third',
        original_language: 'en',
        adult: false,
        backdrop_path: '/7fT1IogBbxM6S7SOIGSe7BXLEMq.jpg',
        overview:
          'The King of Far Far Away has died and Shrek and Fiona are to become King & Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom.',
        poster_path: '/lA17Mlz8hXVZsW5Y3WuUa8KPilQ.jpg'
      },
      {
        release_date: '2010-05-16',
        id: 10192,
        vote_count: 4294,
        video: false,
        media_type: 'movie',
        vote_average: 6.2,
        title: 'Shrek Forever After',
        genre_ids: [12, 16, 35, 14, 10751],
        original_title: 'Shrek Forever After',
        original_language: 'en',
        adult: false,
        backdrop_path: '/aD8iOuLlEiMfVlHTnAe15fZLo0S.jpg',
        overview:
          "A bored and domesticated Shrek pacts with deal-maker Rumpelstiltskin to get back to feeling like a real ogre again, but when he's duped and sent to a twisted version of Far Far Away—where Rumpelstiltskin is king, ogres are hunted, and he and Fiona have never met—he sets out to restore his world and reclaim his true love.",
        poster_path: '/enqVwbUu6OX5LHq0fuk7sLT35zy.jpg'
      }
    ],
    name: 'Antonio Banderas'
  }
]
