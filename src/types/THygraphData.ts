export type TEducation = {
  name: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
};

export type TExperiences = {
  name: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
};

export type TTechnology = {
  name: string;
  iconSvg: string;
  startDate: string;
};

export type TSocialMedia = {
  name: string;
  url: string;
  logoSvg: string;
};

export type THygraphData = {
  page: {
    name: string;
    headline: string;
    aboutPicture: string;
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
};
