
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Alarm',
    to: '/docs/monitoring/alarm/overview',
    description: (
      <>
        Create, tune, and manage alarms—rules, thresholds, schedules, notifications,
        and escalation to reduce alert fatigue.
      </>
    ),
  },
  {
    title: 'Event',
    to: '/docs/monitoring/event/overview',
    description: (
      <>
        Understand event types, event routing, correlation, and how to diagnose
        what changed and why.
      </>
    ),
  },
  {
    title: 'Trend',
    to: '/docs/monitoring/trend/overview',
    description: (
      <>
        Explore trend dashboards, chart types, baselines, and insights for capacity,
        performance, and anomaly patterns.
      </>
    ),
  },
];

function FeatureCard({title, to, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.card, 'padding--lg')}>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardAction}>
          <Link className="button button--primary button--sm" to={to}>
            Open {title} Docs →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
