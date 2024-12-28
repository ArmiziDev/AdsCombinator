// data.js

// Hooks: each used 3 times in a row. We can store an optional video path.
const HOOKS = [
  {
    id: 1,
    text: "Hook #1: The Myth-Buster",
    video: "videos/hook1.mp4",
  },
  {
    id: 2,
    text: "Hook #2: The Confession",
    video: "videos/hook2.mp4",
  },
  {
    id: 3,
    text: "Hook #3: The Painful Truth",
    video: "videos/hook3.mp4",
  },
  {
    id: 4,
    text: "Hook #4: The Unexpected Stat",
    video: "videos/hook4.mp4",
  },
  {
    id: 5,
    text: "Hook #5: The Provocative Question",
    video: "videos/hook5.mp4",
  },
  {
    id: 6,
    text: "Hook #6: The Bold Claim",
    video: "videos/hook6.mp4",
  },
];

// Middles: these rotate or combine with hooks in a pattern (could reference any video, if you have it).
const MIDDLES = [
  {
    id: 1,
    text: "Middle #1: Problem-Agitate-Solution body text",
    video: "videos/middle1.mp4",
  },
  {
    id: 2,
    text: "Middle #2: Story-driven scenario explaining the challenge",
    video: "videos/middle2.mp4",
  },
  {
    id: 3,
    text: "Middle #3: Data-driven argument that busts a common myth",
    video: "videos/middle3.mp4",
  },
  {
    id: 4,
    text: "Middle #4: Special details about your product’s unique angle",
    video: null, // no video
  },
  {
    id: 5,
    text: "Middle #5: Social proof and case studies",
    video: null,
  },
  {
    id: 6,
    text: "Middle #6: Comparison to bad alternatives in the market",
    video: "videos/middle6.mp4",
  },
];

// Endings: final call to action or concluding note.
const ENDINGS = [
  {
    id: 1,
    text: "Ending #1: Clear CTA - Sign up now!",
    video: null,
  },
  {
    id: 2,
    text: "Ending #2: Scarcity-based CTA - Only 24 hours left!",
    video: "videos/ending2.mp4",
  },
  {
    id: 3,
    text: "Ending #3: Assurance-based CTA - 100% money-back guarantee.",
    video: null,
  },
];
