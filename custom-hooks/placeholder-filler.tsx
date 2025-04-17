export namespace PlaceholderFiller {
  export const string = () => {
    return "Lorem ipsum";
  };
  export const shortText = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  };
  export const mediumText = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  };
  export const longText = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  };
  export const extraLongText = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum luctus mauris. Integer ut ultricies tortor, non tincidunt eros. Aenean ac rutrum dui. Sed ut lorem nec metus fermentum fermentum. Maecenas et purus a mi blandit commodo. Nullam vitae justo eget ligula sodales semper faucibus sodales felis. Duis tristique cursus arcu, ut hendrerit augue volutpat non. Donec posuere malesuada libero. Curabitur non urna ornare, semper justo et, rhoncus mauris. Pellentesque vel ante scelerisque mauris ultrices sodales. Quisque imperdiet augue nulla, eget finibus urna tincidunt vitae. Duis vitae consequat nibh, at commodo urna. Nulla pharetra tellus ac est rhoncus, sit amet dictum dui iaculis. Suspendisse faucibus odio ut facilisis rutrum. Nullam ultricies libero ex, id tincidunt nisl condimentum ornare. Suspendisse potenti.";
  };
  export const number = () => {
    return Math.floor(Math.random() * 10);
  };
  export const image = () => {
    return "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/63ece783e682de002c20666b?alt=media&timestamp=1676470148166";
  };
}
