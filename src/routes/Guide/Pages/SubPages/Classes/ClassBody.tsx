import React, { FunctionComponent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export type Props = JSX.IntrinsicElements['div'] & {
  intro: string;
  playstyle: string;
  skillComponent: ReactNode;
};

const ClassBody: FunctionComponent<Props> = ({ intro, playstyle, skillComponent }) => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t(intro)}</p>
      <h2>{t('classes.playstyle')}</h2>
      <p>{t(playstyle)}</p>
      <h2>{t('classes.skills')}</h2>
      <p>{skillComponent}</p>
    </div>
  );
};

export default ClassBody;
