
import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {resolveDocsSlug, slugToDocsPath} from '../utils/docsLinkResolver';

type TestCase = {
  label: string;
  input: { uiLocation?: string; featureId?: string; errorCode?: string; fallback?: string };
};

const testCases: TestCase[] = [
  {
    label: 'UI Screen: monitoring/alarm/view',
    input: { uiLocation: 'monitoring/alarm/view', fallback: '/monitoring/alarm/overview' },
  },
  {
    label: 'Feature: feature.alarm.configuration',
    input: { featureId: 'feature.alarm.configuration', fallback: '/monitoring/alarm/overview' },
  },
  {
    label: 'Error: ALARM_RULE_INVALID',
    input: { errorCode: 'ALARM_RULE_INVALID', fallback: '/monitoring/alarm/overview' },
  },
  {
    label: 'Error: ALARM_EVALUATION_DELAYED',
    input: { errorCode: 'ALARM_EVALUATION_DELAYED', fallback: '/monitoring/alarm/overview' },
  },
  {
    label: 'UI Screen: settings/notifications/channels',
    input: { uiLocation: 'settings/notifications/channels', fallback: '/monitoring/alarm/overview' },
  },
];

export default function UiDocsLinkTest() {
  const [selected, setSelected] = useState<TestCase>(testCases[0]);

  const resolved = useMemo(() => {
    const slug = resolveDocsSlug(selected.input);
    return slug ? { slug, url: slugToDocsPath(slug) } : null;
  }, [selected]);

  return (
    <Layout title="UI → Docs Link Test" description="Test context-aware UI-to-Docs linking">
      <main className="container margin-vert--lg">
        <h1>UI → Docs Link Test</h1>
        <p>
          This page simulates UI contexts (screen location / feature ID / error code) and resolves a
          context-aware docs link.
        </p>

        <div className="row">
          <div className="col col--5">
            <h2>Test Cases</h2>
            <ul>
              {testCases.map(tc => (
                <li key={tc.label} style={{marginBottom: 8}}>
                  <button
                    className="button button--sm button--secondary"
                    onClick={() => setSelected(tc)}
                  >
                    {tc.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col col--7">
            <h2>Resolved Link</h2>

            <div className="alert alert--info">
              <div><strong>Input</strong></div>
              <pre style={{whiteSpace: 'pre-wrap'}}>{JSON.stringify(selected.input, null, 2)}</pre>
            </div>

            {resolved ? (
              <>
                <div className="alert alert--success">
                  <div><strong>Canonical slug</strong>: {resolved.slug}</div>
                  <div><strong>Docusaurus path</strong>: {resolved.url}</div>
                </div>

                <Link className="button button--primary" to={resolved.url}>
                  Open Docs →
                </Link>
              </>
            ) : (
              <div className="alert alert--warning">
                No mapping found. Add it to <code>src/docsLinkMap.ts</code>.
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
