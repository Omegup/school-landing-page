import { useTranslation } from "react-i18next";

export const useSchoolUpData = () => {
  const { t } = useTranslation("data");

  return {
    mainTabs: [
      {
        id: "admin",
        label: t("mainTabs.admin.label"),
        Icon: () => (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.90479 1.25H8.09521C8.95539 1.25004 9.61195 1.5055 10.0532 1.94678C10.4945 2.38805 10.75 3.04461 10.75 3.90479V8.09521C10.75 8.75977 10.5976 9.30188 10.3267 9.71533C10.057 10.1267 9.66038 10.4256 9.14355 10.5918L9.1377 10.5938C8.84 10.6975 8.489 10.75 8.09521 10.75H3.90479C3.511 10.75 3.16 10.6975 2.8623 10.5938L2.85645 10.5918C2.33962 10.4256 1.94296 10.1267 1.67334 9.71533C1.40241 9.30188 1.25003 8.75977 1.25 8.09521V3.90479C1.25004 3.04461 1.5055 2.38805 1.94678 1.94678C2.38805 1.5055 3.04461 1.25004 3.90479 1.25ZM3.90479 1.5C3.15785 1.50004 2.54616 1.69798 2.12207 2.12207C1.69798 2.54616 1.50004 3.15785 1.5 3.90479V8.1001C1.50001 8.66646 1.61254 9.15401 1.85498 9.54248C2.09999 9.93498 2.46557 10.2067 2.93311 10.3579L2.9707 10.3701H3.16797L3.23779 10.2339C3.6783 9.37085 4.72803 8.73486 6 8.73486C7.27205 8.73486 8.32669 9.37584 8.76221 10.2334L8.85938 10.4248L9.06348 10.3574C9.53442 10.2014 9.90133 9.92896 10.1465 9.53613C10.3891 9.14743 10.5 8.66112 10.5 8.09521V3.90479C10.5 3.15785 10.302 2.54616 9.87793 2.12207C9.45384 1.69798 8.84215 1.50004 8.09521 1.5H3.90479Z"
              fill="currentColor"
              stroke="currentColor"
            />
            <path
              d="M6 4.25C6.85191 4.25002 7.54004 4.93812 7.54004 5.79004C7.54002 6.64285 6.85099 7.33494 6 7.33496C5.14899 7.33496 4.45998 6.64286 4.45996 5.79004C4.45996 4.93811 5.14807 4.25 6 4.25Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        ),
        primaryBgClass: "bg-[#3879F0]",
        secondaryBgClass: "bg-[#DEEAFF]",
        primaryTextClass: "text-[#3879F0]",
        lightTextClass: "text-[#DEEAFF]",
        whiteTextClass: "text-[#FFF]",
        subTabs: [
          { id: "dashboard", label: t("mainTabs.admin.subTabs.dashboard") },
          { id: "schedule", label: t("mainTabs.admin.subTabs.schedule") },
          { id: "fees", label: t("mainTabs.admin.subTabs.fees") },
          { id: "invoice", label: t("mainTabs.admin.subTabs.invoice") },
          { id: "evaluation", label: t("mainTabs.admin.subTabs.evaluation") },
          { id: "grades", label: t("mainTabs.admin.subTabs.grades") },
          { id: "forms", label: t("mainTabs.admin.subTabs.forms") },
          { id: "reports", label: t("mainTabs.admin.subTabs.reports") },
        ],
        featuresBySubTab: {
          dashboard: {
            features: [
              {
                title: t(
                  "mainTabs.admin.features.dashboard.globalOverview.title"
                ),
                description: t(
                  "mainTabs.admin.features.dashboard.globalOverview.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.dashboard.financialManagement.title"
                ),
                description: t(
                  "mainTabs.admin.features.dashboard.financialManagement.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.dashboard.eventsAgenda.title"
                ),
                description: t(
                  "mainTabs.admin.features.dashboard.eventsAgenda.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.dashboard.realTimeAttendance.title"
                ),
                description: t(
                  "mainTabs.admin.features.dashboard.realTimeAttendance.description"
                ),
              },
              {
                title: t("mainTabs.admin.features.dashboard.adminTasks.title"),
                description: t(
                  "mainTabs.admin.features.dashboard.adminTasks.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.dashboard.notesReminders.title"
                ),
                description: t(
                  "mainTabs.admin.features.dashboard.notesReminders.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.dashboard.multilingual.title"
                ),
                description: t(
                  "mainTabs.admin.features.dashboard.multilingual.description"
                ),
              },
            ],
            images: ["/admin/admin-1.jpg"],
          },
          schedule: {
            features: [
              {
                title: t(
                  "mainTabs.admin.features.schedule.scheduleCreation.title"
                ),
                description: t(
                  "mainTabs.admin.features.schedule.scheduleCreation.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.schedule.centralizedPlanning.title"
                ),
                description: t(
                  "mainTabs.admin.features.schedule.centralizedPlanning.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.schedule.realTimeTracking.title"
                ),
                description: t(
                  "mainTabs.admin.features.schedule.realTimeTracking.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.schedule.realTimeAttendance.title"
                ),
                description: t(
                  "mainTabs.admin.features.schedule.realTimeAttendance.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.schedule.modularOrganization.title"
                ),
                description: t(
                  "mainTabs.admin.features.schedule.modularOrganization.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.schedule.directConnection.title"
                ),
                description: t(
                  "mainTabs.admin.features.schedule.directConnection.description"
                ),
              },
            ],
            images: ["/admin/admin-2.jpg"],
          },
          fees: {
            features: [
              {
                title: t(
                  "mainTabs.admin.features.fees.submenuNavigation.title"
                ),
                description: t(
                  "mainTabs.admin.features.fees.submenuNavigation.description"
                ),
              },
              {
                title: t("mainTabs.admin.features.fees.globalStatistics.title"),
                description: t(
                  "mainTabs.admin.features.fees.globalStatistics.description"
                ),
              },
              {
                title: t("mainTabs.admin.features.fees.fees.title"),
                description: t("mainTabs.admin.features.fees.fees.description"),
              },
            ],
            images: ["/admin/admin-3.jpg"],
          },
          invoice: {
            features: [
              {
                title: t(
                  "mainTabs.admin.features.invoice.submenuNavigation.title"
                ),
                description: t(
                  "mainTabs.admin.features.invoice.submenuNavigation.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.invoice.globalStatistics.title"
                ),
                description: t(
                  "mainTabs.admin.features.invoice.globalStatistics.description"
                ),
              },
              {
                title: t("mainTabs.admin.features.invoice.invoices.title"),
                description: t(
                  "mainTabs.admin.features.invoice.invoices.description"
                ),
              },
            ],
            images: ["/admin/admin-4.jpg"],
          },
          evaluation: {
            features: [
              {
                title: t(
                  "mainTabs.admin.features.evaluation.globalStatistics.title"
                ),
                description: t(
                  "mainTabs.admin.features.evaluation.globalStatistics.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.evaluation.documentManagement.title"
                ),
                description: t(
                  "mainTabs.admin.features.evaluation.documentManagement.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.evaluation.classDetails.title"
                ),
                description: t(
                  "mainTabs.admin.features.evaluation.classDetails.description"
                ),
              },
            ],
            images: ["/admin/admin-5.jpg"],
          },
          grades: {
            features: [
              {
                title: t("mainTabs.admin.features.grades.inputTable.title"),
                description: t(
                  "mainTabs.admin.features.grades.inputTable.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.grades.rightStatistics.title"
                ),
                description: t(
                  "mainTabs.admin.features.grades.rightStatistics.description"
                ),
              },
              {
                title: t("mainTabs.admin.features.grades.examAddition.title"),
                description: t(
                  "mainTabs.admin.features.grades.examAddition.description"
                ),
              },
            ],
            images: ["/admin/admin-6.jpg"],
          },
          forms: {
            features: [
              {
                title: t("mainTabs.admin.features.forms.customForms.title"),
                description: t(
                  "mainTabs.admin.features.forms.customForms.description"
                ),
              },
              {
                title: t("mainTabs.admin.features.forms.readyTemplates.title"),
                description: t(
                  "mainTabs.admin.features.forms.readyTemplates.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.forms.configurableFields.title"
                ),
                description: t(
                  "mainTabs.admin.features.forms.configurableFields.description"
                ),
              },
              {
                title: t("mainTabs.admin.features.forms.mediaDocuments.title"),
                description: t(
                  "mainTabs.admin.features.forms.mediaDocuments.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.forms.realTimeAnalysis.title"
                ),
                description: t(
                  "mainTabs.admin.features.forms.realTimeAnalysis.description"
                ),
              },
              {
                title: t("mainTabs.admin.features.forms.accessibility.title"),
                description: t(
                  "mainTabs.admin.features.forms.accessibility.description"
                ),
              },
            ],
            images: ["/admin/admin-7.jpg"],
          },
          reports: {
            features: [
              {
                title: t("mainTabs.admin.features.reports.customForms.title"),
                description: t(
                  "mainTabs.admin.features.reports.customForms.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.reports.readyTemplates.title"
                ),
                description: t(
                  "mainTabs.admin.features.reports.readyTemplates.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.reports.configurableFields.title"
                ),
                description: t(
                  "mainTabs.admin.features.reports.configurableFields.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.reports.mediaDocuments.title"
                ),
                description: t(
                  "mainTabs.admin.features.reports.mediaDocuments.description"
                ),
              },
              {
                title: t(
                  "mainTabs.admin.features.reports.realTimeAnalysis.title"
                ),
                description: t(
                  "mainTabs.admin.features.reports.realTimeAnalysis.description"
                ),
              },
              {
                title: t("mainTabs.admin.features.reports.accessibility.title"),
                description: t(
                  "mainTabs.admin.features.reports.accessibility.description"
                ),
              },
            ],
            images: ["/admin/admin-8.jpg"],
          },
        },
      },
      {
        id: "teacher",
        label: t("mainTabs.teacher.label"),
        Icon: () => (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.545 3.49001C10.12 3.02001 9.41002 2.78501 8.38002 2.78501H8.26002V2.76501C8.26002 1.92501 8.26002 0.88501 6.38002 0.88501H5.62002C3.74002 0.88501 3.74002 1.93001 3.74002 2.76501V2.79001H3.62002C2.58502 2.79001 1.88002 3.02501 1.45502 3.49501C0.960019 4.04501 0.975019 4.78501 1.02502 5.29001L1.03002 5.32501L1.08002 5.85001C1.08502 5.85501 1.09502 5.86501 1.10502 5.87001C1.27002 5.98001 1.44002 6.09001 1.62002 6.19001C1.69002 6.23501 1.76502 6.27501 1.84002 6.31501C2.69502 6.78501 3.63502 7.10001 4.59002 7.25501C4.63502 7.72501 4.84002 8.27501 5.93502 8.27501C7.03002 8.27501 7.24502 7.73001 7.28002 7.24501C8.30002 7.08001 9.28502 6.72501 10.175 6.20501C10.205 6.19001 10.225 6.17501 10.25 6.16001C10.48 6.03001 10.695 5.89001 10.905 5.73501C10.915 5.73001 10.925 5.72001 10.93 5.71001L10.95 5.53001L10.975 5.29501C10.98 5.26501 10.98 5.24001 10.985 5.20501C11.025 4.70001 11.015 4.01001 10.545 3.49001ZM6.54502 6.91501C6.54502 7.44501 6.54502 7.52501 5.93002 7.52501C5.31502 7.52501 5.31502 7.43001 5.31502 6.92001V6.29001H6.54502V6.91501ZM4.45502 2.78501V2.76501C4.45502 1.91501 4.45502 1.60001 5.62002 1.60001H6.38002C7.54502 1.60001 7.54502 1.92001 7.54502 2.76501V2.79001H4.45502V2.78501Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M10.25 6.15001C10.225 6.16501 10.2 6.18001 10.175 6.19501C9.28496 6.71501 8.29996 7.06501 7.27996 7.23501C7.23996 7.71501 7.02996 8.26501 5.93496 8.26501C4.83996 8.26501 4.62996 7.72001 4.58996 7.24501C3.63496 7.09501 2.69496 6.78001 1.83996 6.30501C1.76496 6.26501 1.68996 6.22501 1.61996 6.18001C1.43996 6.08001 1.26996 5.97001 1.10496 5.86001C1.09496 5.85501 1.08496 5.84501 1.07996 5.84001L1.38496 9.09501C1.48996 10.09 1.89996 11.115 4.09996 11.115H7.90996C10.11 11.115 10.52 10.09 10.625 9.09001L10.94 5.70001C10.935 5.71001 10.925 5.72001 10.915 5.72501C10.7 5.88001 10.48 6.02501 10.25 6.15001Z"
              fill="currentColor"
            />
          </svg>
        ),
        primaryBgClass: "bg-[#A068AE]",
        secondaryBgClass: "bg-[#F4EEFF]",
        primaryTextClass: "text-[#A068AE]",
        lightTextClass: "text-[#F4EEFF]",
        whiteTextClass: "text-[#FFF]",
        subTabs: [
          { id: "dashboard", label: t("mainTabs.teacher.subTabs.dashboard") },
          { id: "schedule", label: t("mainTabs.teacher.subTabs.schedule") },
          { id: "grades", label: t("mainTabs.teacher.subTabs.grades") },
          { id: "evaluation", label: t("mainTabs.teacher.subTabs.evaluation") },
          { id: "reports", label: t("mainTabs.teacher.subTabs.reports") },
        ],
        featuresBySubTab: {
          dashboard: {
            features: [
              {
                title: t(
                  "mainTabs.teacher.features.dashboard.scheduleClasses.title"
                ),
                description: t(
                  "mainTabs.teacher.features.dashboard.scheduleClasses.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.dashboard.homeworkManagement.title"
                ),
                description: t(
                  "mainTabs.teacher.features.dashboard.homeworkManagement.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.dashboard.studentTracking.title"
                ),
                description: t(
                  "mainTabs.teacher.features.dashboard.studentTracking.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.dashboard.attendanceCalls.title"
                ),
                description: t(
                  "mainTabs.teacher.features.dashboard.attendanceCalls.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.dashboard.attendanceHistory.title"
                ),
                description: t(
                  "mainTabs.teacher.features.dashboard.attendanceHistory.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.dashboard.agendaEvents.title"
                ),
                description: t(
                  "mainTabs.teacher.features.dashboard.agendaEvents.description"
                ),
              },
            ],
            images: ["/teacher/1.png"],
          },
          schedule: {
            features: [
              {
                title: t(
                  "mainTabs.teacher.features.schedule.smartFilters.title"
                ),
                description: t(
                  "mainTabs.teacher.features.schedule.smartFilters.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.schedule.homeworkDetails.title"
                ),
                description: t(
                  "mainTabs.teacher.features.schedule.homeworkDetails.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.schedule.studentClassTracking.title"
                ),
                description: t(
                  "mainTabs.teacher.features.schedule.studentClassTracking.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.schedule.multiSubjects.title"
                ),
                description: t(
                  "mainTabs.teacher.features.schedule.multiSubjects.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.schedule.progressIndicators.title"
                ),
                description: t(
                  "mainTabs.teacher.features.schedule.progressIndicators.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.schedule.homeworkCreation.title"
                ),
                description: t(
                  "mainTabs.teacher.features.schedule.homeworkCreation.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.schedule.targetedAssignment.title"
                ),
                description: t(
                  "mainTabs.teacher.features.schedule.targetedAssignment.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.schedule.resourceAddition.title"
                ),
                description: t(
                  "mainTabs.teacher.features.schedule.resourceAddition.description"
                ),
              },
            ],
            images: ["/teacher/2.png"],
          },
          grades: {
            features: [
              {
                title: t(
                  "mainTabs.teacher.features.grades.encouragements.title"
                ),
                description: t(
                  "mainTabs.teacher.features.grades.encouragements.description"
                ),
              },
              {
                title: t("mainTabs.teacher.features.grades.observations.title"),
                description: t(
                  "mainTabs.teacher.features.grades.observations.description"
                ),
              },
              {
                title: t("mainTabs.teacher.features.grades.punishments.title"),
                description: t(
                  "mainTabs.teacher.features.grades.punishments.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.grades.quickStatistics.title"
                ),
                description: t(
                  "mainTabs.teacher.features.grades.quickStatistics.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.grades.completeHistory.title"
                ),
                description: t(
                  "mainTabs.teacher.features.grades.completeHistory.description"
                ),
              },
              {
                title: t("mainTabs.teacher.features.grades.sortFilters.title"),
                description: t(
                  "mainTabs.teacher.features.grades.sortFilters.description"
                ),
              },
            ],
            images: ["/teacher/3.png"],
          },
          evaluation: {
            features: [
              {
                title: t(
                  "mainTabs.teacher.features.evaluation.examManagement.title"
                ),
                description: t(
                  "mainTabs.teacher.features.evaluation.examManagement.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.evaluation.gradeManagement.title"
                ),
                description: t(
                  "mainTabs.teacher.features.evaluation.gradeManagement.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.evaluation.planningConfiguration.title"
                ),
                description: t(
                  "mainTabs.teacher.features.evaluation.planningConfiguration.description"
                ),
              },
            ],
            images: ["/teacher/4.png", "/teacher/5.png", "/teacher/6.png"],
          },
          reports: {
            features: [
              {
                title: t(
                  "mainTabs.teacher.features.reports.appreciationInput.title"
                ),
                description: t(
                  "mainTabs.teacher.features.reports.appreciationInput.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.reports.progressTracking.title"
                ),
                description: t(
                  "mainTabs.teacher.features.reports.progressTracking.description"
                ),
              },
              {
                title: t(
                  "mainTabs.teacher.features.reports.appreciationPublication.title"
                ),
                description: t(
                  "mainTabs.teacher.features.reports.appreciationPublication.description"
                ),
              },
            ],
            images: ["/teacher/7.png", "/teacher/8.png"],
          },
        },
      },
      {
        id: "parent",
        label: t("mainTabs.parent.label"),
        Icon: () => (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M8.76502 3.885C8.73002 3.88 8.69502 3.88 8.66002 3.885C7.88502 3.86 7.27002 3.225 7.27002 2.445C7.27002 1.65 7.91502 1 8.71502 1C9.51002 1 10.16 1.645 10.16 2.445C10.155 3.225 9.54002 3.86 8.76502 3.885Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M10.3951 7.35001C9.83505 7.72501 9.05005 7.86501 8.32505 7.77001C8.51505 7.36001 8.61505 6.90502 8.62005 6.42502C8.62005 5.92502 8.51005 5.45002 8.30005 5.03502C9.04005 4.93502 9.82505 5.07501 10.39 5.45001C11.18 5.97001 11.1801 6.82501 10.3951 7.35001Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M3.21995 3.885C3.25495 3.88 3.28995 3.88 3.32495 3.885C4.09995 3.86 4.71495 3.225 4.71495 2.445C4.71495 1.65 4.06995 1 3.26995 1C2.47495 1 1.82495 1.645 1.82495 2.445C1.82995 3.225 2.44495 3.86 3.21995 3.885Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M3.27506 6.42499C3.27506 6.90999 3.38006 7.36999 3.57006 7.78499C2.86506 7.85999 2.13006 7.70999 1.59006 7.35499C0.800059 6.82999 0.800059 5.97499 1.59006 5.44999C2.12506 5.08999 2.88006 4.94499 3.59006 5.02499C3.38506 5.44499 3.27506 5.91999 3.27506 6.42499Z"
              fill="currentColor"
            />
            <path
              d="M6.06002 7.935C6.02002 7.93 5.97503 7.93 5.93003 7.935C5.01003 7.905 4.27502 7.15 4.27502 6.22C4.27502 5.27 5.04003 4.5 5.99503 4.5C6.94503 4.5 7.71502 5.27 7.71502 6.22C7.71502 7.15 6.98502 7.905 6.06002 7.935Z"
              fill="currentColor"
            />
            <path
              d="M4.43502 8.97001C3.68002 9.47501 3.68002 10.305 4.43502 10.805C5.29502 11.38 6.70503 11.38 7.56503 10.805C8.32003 10.3 8.32003 9.47001 7.56503 8.97001C6.71003 8.39501 5.30002 8.39501 4.43502 8.97001Z"
              fill="currentColor"
            />
          </svg>
        ),
        primaryBgClass: "bg-[#FF9F51]",
        secondaryBgClass: "bg-[#FFF4ED]",
        primaryTextClass: "text-[#FF9F51]",
        lightTextClass: "text-[#FFF4ED]",
        whiteTextClass: "text-[#FFF]",
        subTabs: [
          { id: "dashboard", label: t("mainTabs.parent.subTabs.dashboard") },
          { id: "fees", label: t("mainTabs.parent.subTabs.fees") },
          { id: "schedule", label: t("mainTabs.parent.subTabs.schedule") },
          { id: "Presence", label: t("mainTabs.parent.subTabs.Presence") },
          { id: "Examens", label: t("mainTabs.parent.subTabs.Examens") },
          { id: "Resultat", label: t("mainTabs.parent.subTabs.Resultat") },
        ],
        featuresBySubTab: {
          dashboard: {
            features: [
              {
                title: t(
                  "mainTabs.parent.features.dashboard.generalOverview.title"
                ),
                description: t(
                  "mainTabs.parent.features.dashboard.generalOverview.description"
                ),
              },
              {
                title: t("mainTabs.parent.features.dashboard.schedule.title"),
                description: t(
                  "mainTabs.parent.features.dashboard.schedule.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.dashboard.attendanceTracking.title"
                ),
                description: t(
                  "mainTabs.parent.features.dashboard.attendanceTracking.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.dashboard.academicPerformance.title"
                ),
                description: t(
                  "mainTabs.parent.features.dashboard.academicPerformance.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.dashboard.multiChildManagement.title"
                ),
                description: t(
                  "mainTabs.parent.features.dashboard.multiChildManagement.description"
                ),
              },
            ],
            images: ["/parent/Frame.png", "/parent/Frame-1.png"],
          },
          fees: {
            features: [
              {
                title: t(
                  "mainTabs.parent.features.fees.feesPaymentTracking.title"
                ),
                description: t(
                  "mainTabs.parent.features.fees.feesPaymentTracking.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.fees.subscriptionRecurring.title"
                ),
                description: t(
                  "mainTabs.parent.features.fees.subscriptionRecurring.description"
                ),
              },
              {
                title: t("mainTabs.parent.features.fees.actionsSummary.title"),
                description: t(
                  "mainTabs.parent.features.fees.actionsSummary.description"
                ),
              },
            ],
            images: [
              "/parent/Frame-2.png",
              "/parent/Frame-3.png",
              "/parent/Frame-4.png",
            ],
          },
          schedule: {
            features: [
              {
                title: t(
                  "mainTabs.parent.features.schedule.disciplinaryConsultation.title"
                ),
                description: t(
                  "mainTabs.parent.features.schedule.disciplinaryConsultation.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.schedule.filteringSort.title"
                ),
                description: t(
                  "mainTabs.parent.features.schedule.filteringSort.description"
                ),
              },
            ],
            images: ["/parent/Frame-5.png"],
          },
          Presence: {
            features: [
              {
                title: t(
                  "mainTabs.parent.features.Presence.attendanceConsultation.title"
                ),
                description: t(
                  "mainTabs.parent.features.Presence.attendanceConsultation.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.Presence.generalSummary.title"
                ),
                description: t(
                  "mainTabs.parent.features.Presence.generalSummary.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.Presence.filteringSort.title"
                ),
                description: t(
                  "mainTabs.parent.features.Presence.filteringSort.description"
                ),
              },
            ],
            images: ["/parent/Frame-6.png"],
          },
          Examens: {
            features: [
              {
                title: t(
                  "mainTabs.parent.features.Examens.examConsultation.title"
                ),
                description: t(
                  "mainTabs.parent.features.Examens.examConsultation.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.Examens.performanceTracking.title"
                ),
                description: t(
                  "mainTabs.parent.features.Examens.performanceTracking.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.Examens.actionsSummary.title"
                ),
                description: t(
                  "mainTabs.parent.features.Examens.actionsSummary.description"
                ),
              },
            ],
            images: ["/parent/Frame-7.png", "/parent/Frame-8.png"],
          },
          Resultat: {
            features: [
              {
                title: t(
                  "mainTabs.parent.features.Resultat.documentConsultation.title"
                ),
                description: t(
                  "mainTabs.parent.features.Resultat.documentConsultation.description"
                ),
              },
              {
                title: t("mainTabs.parent.features.Resultat.exportShare.title"),
                description: t(
                  "mainTabs.parent.features.Resultat.exportShare.description"
                ),
              },
              {
                title: t(
                  "mainTabs.parent.features.Resultat.actionsSummary.title"
                ),
                description: t(
                  "mainTabs.parent.features.Resultat.actionsSummary.description"
                ),
              },
            ],
            images: ["/parent/Frame-9.png", "/parent/Frame-10.png"],
          },
        },
      },
      {
        id: "student",
        label: t("mainTabs.student.label"),
        Icon: () => (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M9.19 6.42001V8.88501C9.19 9.52001 8.695 10.2 8.1 10.4L6.505 10.93C6.225 11.025 5.77 11.025 5.495 10.93L3.9 10.4C3.3 10.2 2.81 9.52001 2.81 8.88501L2.815 6.42001L5.025 7.86001C5.565 8.21501 6.455 8.21501 6.995 7.86001L9.19 6.42001Z"
              fill="currentColor"
            />
            <path
              d="M9.99001 3.23L6.99501 1.265C6.45501 0.909999 5.56501 0.909999 5.02501 1.265L2.01501 3.23C1.05001 3.855 1.05001 5.27 2.01501 5.9L2.81501 6.42L5.02501 7.86C5.56501 8.215 6.45501 8.215 6.99501 7.86L9.19001 6.42L9.87501 5.97V7.5C9.87501 7.705 10.045 7.875 10.25 7.875C10.455 7.875 10.625 7.705 10.625 7.5V5.04C10.825 4.395 10.62 3.645 9.99001 3.23Z"
              fill="currentColor"
            />
          </svg>
        ),
        primaryBgClass: "bg-[#F37F73]",
        secondaryBgClass: "bg-[#FFF0EF]",
        primaryTextClass: "text-[#F37F73]",
        lightTextClass: "text-[#FFF0EF]",
        whiteTextClass: "text-[#FFF]",
        subTabs: [
          { id: "dashboard", label: t("mainTabs.student.subTabs.dashboard") },
          { id: "messagerie", label: t("mainTabs.student.subTabs.messagerie") },
          { id: "grades", label: t("mainTabs.student.subTabs.grades") },
          { id: "homework", label: t("mainTabs.student.subTabs.homework") },
        ],
        featuresBySubTab: {
          dashboard: {
            features: [
              {
                title: t("mainTabs.student.features.dashboard.quickInfo.title"),
                description: t(
                  "mainTabs.student.features.dashboard.quickInfo.description"
                ),
              },
              {
                title: t(
                  "mainTabs.student.features.dashboard.mainActions.title"
                ),
                description: t(
                  "mainTabs.student.features.dashboard.mainActions.description"
                ),
              },
            ],
            images: ["/student/Frame.png", "/student/Frame-1.png"],
          },
          messagerie: {
            features: [
              {
                title: t(
                  "mainTabs.student.features.messagerie.messaging.title"
                ),
                description: t(
                  "mainTabs.student.features.messagerie.messaging.description"
                ),
              },
              {
                title: t(
                  "mainTabs.student.features.messagerie.multimediaOptions.title"
                ),
                description: t(
                  "mainTabs.student.features.messagerie.multimediaOptions.description"
                ),
              },
              {
                title: t(
                  "mainTabs.student.features.messagerie.notificationsOrganization.title"
                ),
                description: t(
                  "mainTabs.student.features.messagerie.notificationsOrganization.description"
                ),
              },
            ],
            images: [
              "/student/Frame-2.png",
              "/student/Frame-3.png",
              "/student/Frame-4.png",
            ],
          },
          grades: {
            features: [
              {
                title: t(
                  "mainTabs.student.features.grades.calendarPlanning.title"
                ),
                description: t(
                  "mainTabs.student.features.grades.calendarPlanning.description"
                ),
              },
              {
                title: t(
                  "mainTabs.student.features.grades.sessionDetails.title"
                ),
                description: t(
                  "mainTabs.student.features.grades.sessionDetails.description"
                ),
              },
              {
                title: t(
                  "mainTabs.student.features.grades.navigationInteraction.title"
                ),
                description: t(
                  "mainTabs.student.features.grades.navigationInteraction.description"
                ),
              },
            ],
            images: ["/student/Frame-5.png"],
          },
          homework: {
            features: [
              {
                title: t(
                  "mainTabs.student.features.homework.homeworkOrganization.title"
                ),
                description: t(
                  "mainTabs.student.features.homework.homeworkOrganization.description"
                ),
              },
              {
                title: t(
                  "mainTabs.student.features.homework.homeworkDetails.title"
                ),
                description: t(
                  "mainTabs.student.features.homework.homeworkDetails.description"
                ),
              },
              {
                title: t("mainTabs.student.features.homework.navigation.title"),
                description: t(
                  "mainTabs.student.features.homework.navigation.description"
                ),
              },
            ],
            images: [
              "/student/Frame-6.png",
              "/student/Frame-7.png",
              "/student/Frame-8.png",
            ],
          },
        },
      },
    ],
  };
};
