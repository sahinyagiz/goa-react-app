import React from 'react';

import GuidePage from '../../../../GuidePageComponent';
import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier2/archer/icon.png';
import skillOne from '../../../../../../../img/guide/skills/13.png';
import skillTwo from '../../../../../../../img/guide/skills/57.png';
import skillThree from '../../../../../../../img/guide/skills/44.png';
import skillPassive from '../../../../../../../img/guide/skills/17.png';
import skillUltimate from '../../../../../../../img/guide/skills/16.png';

export default (
  <GuidePage
    right={
      <ClassCard
        name="Archer"
        icon={icon}
        classTier={3}
        element="element.air"
        weapons={['Bow', 'Crossbow', 'Dagger']}
        armors={['Light', 'Feather', 'Cloth']}
        damage={10}
        defense={6}
        health={8}
        mana={4}
      />
    }
  >
    <ClassBody
      intro="classes.tier2.archer.intro"
      playstyle="classes.tier2.archer.playstyle"
      skillComponent={
        <Skill
          icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
          names={['Poison Arrow', 'Zephyr', 'Purple Wings', 'Sharpshooter', 'Make It Rain']}
          descriptions={[
            'classes.tier2.archer.skill_one',
            'classes.tier2.archer.skill_two',
            'classes.tier2.archer.skill_three',
            'classes.tier2.archer.skill_passive',
            'classes.tier2.archer.skill_ultimate',
          ]}
        />
      }
    />
  </GuidePage>
);
