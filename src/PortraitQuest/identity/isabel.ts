import type { IdentityPack } from '../types';

const art = (name: string) => `${import.meta.env.BASE_URL}art/isabel/${name}.png`;

export const isabelIdentity: IdentityPack = {
  username: 'Isabel',
  userId: '',
  sourceAvatar: '',
  avatarDescribe: 'Adult woman with shoulder-length wavy light-brown hair and golden highlights',
  sourceStyle: 'hand-painted storybook',
  portraits: {
    neutral: art('neutral'),
    confident: art('confident'),
    worried: art('worried'),
    defiant: art('defiant'),
    exhausted: art('exhausted'),
    arrival: art('arrival'),
    resolved: art('resolved'),
  },
  scenes: {
    intro: art('intro'),
    midpoint: art('midpoint'),
    win: art('win'),
    lose: art('lose'),
  },
};
