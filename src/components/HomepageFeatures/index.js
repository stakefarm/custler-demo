import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Maximum Uptime /  Minimum Risk',
    Svg: require('@site/static/img/uptime-3.svg').default,
    description: (
      <>
        Decades of DevOps and programming experience ensure you will get the maximum staking rewards with zero risk of slashing
      </>
    ),
  },
  {
    title: 'Support the Everscale Network',
    Svg: require('@site/static/img/network-1.svg').default ,
    description: (
      <>
        Custler developed and maintains the essential custler.uninode validator software and maintains Everscale's various test networks
      </>
    ),
  },
  {
    title: 'Trusted by the Community',
    Svg: require('@site/static/img/chevron-4.svg').default,
    description: (
      <>
        Before the DePool contract was available, Custler ran the first community validation pool, with over $1,000,000 in assets, secured solely on honor
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
