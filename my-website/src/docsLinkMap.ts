
// src/docsLinkMap.ts

export const docsLinkMap = {
  byFeatureId: {
    'feature.alarm.overview': '/monitoring/alarm/overview',
    'feature.alarm.alarm-configuration': '/monitoring/alarm/alarm-configuration',
  },

  byUiLocation: {
    'monitoring/alarm': '/monitoring/alarm/overview',
    'monitoring/alarm/new': '/monitoring/alarm/configuration',
      },

  byErrorCode: {
    'ALARM_RULE_INVALID': '/monitoring/alarm/configuration',
    'ALARM_EVALUATION_DELAYED': '/monitoring/alarm/alarm- troubleshooting',
  },
} as const;
