type TEducation = {
  name: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
};

type TExperiences = {
  name: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
};

type TTechnology = {
  name: string;
  icon_svg: string;
  startDate: string;
};

type TSocialMedia = {
  name: string;
  url: string;
  logoSvg: string;
};

export type THygraphData = {
  name: string;
  headline: string;
  about_picture: string;
  aboutme: {
    html: string;
  };
  educations: TEducation[];
  experiencies: TExperiences[];
  technologies: TTechnology[];
  info: {
    email: string;
    socialMedias: TSocialMedia[];
  };
};
