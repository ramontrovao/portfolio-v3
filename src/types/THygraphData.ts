import type { RichTextContent } from "@graphcms/rich-text-types";

export type TEducation = {
  id: string;
  name: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
};

export type TExperience = {
  id: string;
  name: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
};

export type TTechnology = {
  id: string;
  name: string;
  iconSvg: string;
  startDate: string;
};

export type TSocialMedia = {
  id: string;
  name: string;
  logoSvg: string;
  url: string;
};

export type TCurriculum = {
  svg: string;
  file: {
    url: string;
  };
};

export type TProject = {
  id: string;
  name: string;
  prodUrl: string;
  repoUrl: string;
  description: string;
  projectTechnologies: {
    iconSvg: string;
    id: string;
    name: string;
  }[];
  wallpaper: {
    url: string;
  };
};

export type THeaderData = {
  page: {
    info: {
      socialMedias: TSocialMedia[];
      curriculum: TCurriculum;
    };
  };
};

export type THomePageData = {
  page: {
    name: string;
    headline: string;
    aboutPicture: {
      url: string;
    };
    aboutme: {
      raw: RichTextContent;
    };
    educations: TEducation[];
    experiences: TExperience[];
    technologies: TTechnology[];
    info: {
      email: string;
      phone: string;
      curriculum: TCurriculum;
      socialMedias: TSocialMedia[];
    };
  };
};

export type TProjectsPageData = {
  page: {
    id: string;
    projects: TProject[];
  };
};

export type TLinksPageData = {
  page: {
    name: string;
    info: {
      socialMedias: TSocialMedia[];
    };
  };
};
