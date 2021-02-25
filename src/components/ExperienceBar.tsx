import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import * as Styles from '../styles/components/experienceBarStyles';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const calc = currentExperience - experienceToNextLevel
    const startExperience = calc < 0 ? 0 : calc;

    const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

    return (
        <Styles.Header className="experience-bar">
            <Styles.Span>{startExperience} xp</Styles.Span>
            <Styles.ProgressBackground>
                <Styles.Progress progress={percentToNextLevel} />
                <Styles.CurrentExperience className="current-experience" progress={percentToNextLevel}>
                    {currentExperience} xp
                </Styles.CurrentExperience>
            </Styles.ProgressBackground>
            <Styles.Span>{experienceToNextLevel} xp</Styles.Span>
        </Styles.Header>
    )
}