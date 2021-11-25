<template>
  <div class="skills-container">
    <div class="page-content">
      <NavBar />
      <div class="row skills-page">
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
          <Paragraph 
            :title="skillsExplicationTitle" 
            :content="skillsExplicationContent" 
            context="static-page"
          />
          <Paragraph 
            :title="languagesSection.title" 
            :skills-list="languagesSection.values" 
            context="static-page"
          />
        </div>
        <div class="col-lg-5">
          <Paragraph
            :title="frameworksSection.title"
            :skills-list="frameworksSection.values"
            context="static-page"
          />
          <Paragraph
            :title="databasesSection.title"
            :skills-list="databasesSection.values"
            context="static-page"
          />
          <Paragraph
            :title="githubSection.title"
            :skills-list="githubSection.values"
            context="static-page"
          />
        </div>
      </div>
      <div class="push"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {
  SKILLS_EXPLICATION_TITLE,
  SKILLS_EXPLICATION_CONTENT,
  SKILLS_HIGH_SPAN,
  SKILLS_HIGH_CONTENT,
  SKILLS_MEDIUM_SPAN,
  SKILLS_MEDIUM_CONTENT,
  SKILLS_LOW_SPAN,
  SKILLS_LOW_CONTENT,
  LANGUAGES_SECTION,
  FRAMEWORKS_SECTION,
  DATABASES_SECTION,
  GITHUB_SECTION,
} from '@/constants-static-texts.js'
export default {
  data: () => {
    return {
      skillsExplicationTitle: SKILLS_EXPLICATION_TITLE,
      skillsExplicationContent: SKILLS_EXPLICATION_CONTENT,
      highSpan: SKILLS_HIGH_SPAN,
      highContent: SKILLS_HIGH_CONTENT,
      mediumSpan: SKILLS_MEDIUM_SPAN,
      mediumContent: SKILLS_MEDIUM_CONTENT,
      lowSpan: SKILLS_LOW_SPAN,
      lowContent: SKILLS_LOW_CONTENT,
      languagesSection: LANGUAGES_SECTION,
      frameworksSection: FRAMEWORKS_SECTION,
      databasesSection: DATABASES_SECTION,
      githubSection: GITHUB_SECTION,
    }
  }
}
</script>

<style>
.about-me-container {
  position: absolute;
  height: 100%;
  margin: 0;
}

.row.skills-page {
  width: 100%;
  margin: 0;
}

p.domain-value {
  padding: 10px 0 0 0;
  color: #aa9f9f;
}

p.domain-value ul li span {
  font-size: 15px;
}

.high {
  color: green;
  font-weight: bolder;
}

.medium {
  color: #FFB300;
  font-weight: bolder;
}

.low {
  color: red;
  font-weight: bolder;
}

.salesforce-skill {
  color: #01a4ff;
  background-color: white;
  border: solid 1px #01a4ff;
  border-radius: 5px;
  transition: 1s;
}

.common-skill {
  color: #6b6666;
  background-color: white;
  border: solid 1px #6b6666;
  border-radius: 5px;
  transition: 1s;
}

.dynamic .common-skill,
.dynamic .salesforce-skill {
  font-size: 10px;
}

.skills-container .img {
  width: 100%;
  padding: 15%;
}

div.paragraph-images:hover img {
  transform: scale(120%);
  transition: 0.5s;
}

.skill-without-logo:hover p {
  transform: scale(120%);
  transition: 0.5s;
}

div.paragraph-images:hover {
  transition: 0.5s;
}

div.paragraph-images:hover .high {
  background-color: #6b6666;
  color: white
}

div.paragraph-images:hover .medium {
  background-color: #01a4ff;
  color: white
}

div.paragraph-images:hover .low, 
div.paragraph-images:hover .low {
  background-color: red;
  color: white
}

.static-page .skill-without-logo {
  display: block;
  height: 45%;
  margin-top: 30%;
  font-size: 25px;
  color: #24b9c4;
  font-weight: bolder;
}

.dynamic .skill-without-logo {
  font-size: 25px;
}

.page-content {
  min-height: 100%;
  margin-bottom: -300px;
}

Footer,
.push {
  height: 340px;
}


@media (min-width: 768px) {
  .skills-container .hero-image img {
    margin-left: 25%;
  }

  #about-me-page {
    padding-top: 5%;
  }

  .page-content {
    margin-bottom: -200px;
  }

  Footer,
  .push {
    height: 220px;
  }
}
</style>
