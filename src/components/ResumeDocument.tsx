import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import {
  resumeProfile,
  resumeSummary,
  resumeSkills,
  resumeExperience,
  resumeEducation,
} from "@/lib/resume-data";
import { formatDateRange, getEducationDateRange } from "@/lib/resume-utils";

const RULE_COLOR = "#b39ddb";

const styles = StyleSheet.create({
  page: {
    paddingVertical: 28,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#1a1a1a",
    lineHeight: 1.25,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 1,
  },
  title: {
    fontSize: 10.5,
    textAlign: "center",
    marginTop: 5,
    lineHeight: 1,
  },
  contactLine: {
    fontSize: 9,
    textAlign: "center",
    marginTop: 4,
  },
  linksLine: {
    fontSize: 9,
    textAlign: "center",
    marginTop: 2,
    color: "#1a1a1a",
  },
  headerRule: {
    borderBottomWidth: 1.25,
    borderBottomColor: RULE_COLOR,
    marginTop: 8,
    marginBottom: 6,
  },
  sectionRule: {
    borderBottomWidth: 0.75,
    borderBottomColor: RULE_COLOR,
    marginTop: 6,
    marginBottom: 6,
  },
  sectionHeading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
  },
  bodyText: {
    marginTop: 3,
    textAlign: "justify",
  },
  skillsText: {
    marginTop: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  boldText: {
    fontFamily: "Helvetica-Bold",
  },
  roleLine: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginTop: 5,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.75,
    marginTop: 4,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 2,
    paddingLeft: 10,
  },
  bulletDot: {
    width: 8,
  },
  bulletText: {
    flex: 1,
    textAlign: "justify",
  },
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  eduDegree: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  eduDates: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  eduSchool: {
    marginTop: 1,
  },
});

export function ResumeDocument() {
  return (
    <Document
      title={`${resumeProfile.name} - Resume`}
      author={resumeProfile.name}
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{resumeProfile.name.toUpperCase()}</Text>
        <Text style={styles.title}>{resumeProfile.title}</Text>
        <Text style={styles.contactLine}>
          {resumeProfile.email} | {resumeProfile.phone} | {resumeProfile.location}
        </Text>
        <Text style={styles.linksLine}>
          <Link src={resumeProfile.github} style={{ color: "#1a1a1a" }}>
            {resumeProfile.githubLabel}
          </Link>
          {"  |  "}
          <Link src={resumeProfile.linkedin} style={{ color: "#1a1a1a" }}>
            {resumeProfile.linkedinLabel}
          </Link>
        </Text>

        <View style={styles.headerRule} />

        <Text style={styles.sectionHeading}>SUMMARY</Text>
        <Text style={styles.bodyText}>{resumeSummary}</Text>

        <View style={styles.sectionRule} />

        <Text style={styles.sectionHeading}>SKILLS</Text>
        <Text style={styles.skillsText}>{resumeSkills.join(", ")}.</Text>

        <View style={styles.sectionRule} />

        <Text style={styles.sectionHeading}>WORK EXPERIENCE</Text>
        {resumeExperience.map((exp) => (
          <View key={`${exp.company}-${exp.role}`}>
            <View style={styles.row}>
              <Text style={styles.roleLine}>
                {exp.role}, {exp.company}
              </Text>
              <Text style={styles.roleLine}>
                {formatDateRange(exp.startDate, exp.endDate)}
              </Text>
            </View>
            {exp.projects.map((project) => (
              <View key={project.name}>
                <Text style={styles.projectName}>{project.name}</Text>
                {project.bullets.map((bullet, i) => (
                  <View key={i} style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>{"•"}</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}

        <View style={styles.sectionRule} />

        <Text style={styles.sectionHeading}>EDUCATION</Text>
        {resumeEducation.map((edu) => (
          <View key={edu.degree}>
            <View style={styles.eduRow}>
              <Text style={styles.eduDegree}>{edu.degree}</Text>
              <Text style={styles.eduDates}>{getEducationDateRange(edu)}</Text>
            </View>
            <Text style={styles.eduSchool}>{edu.school}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
