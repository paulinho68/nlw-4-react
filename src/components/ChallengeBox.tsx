import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import * as Styles from '../styles/components/ChallengeBoxStyles';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { handleClick } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        handleClick();
    }

    function handleChallengeFailed() {
        resetChallenge();
        handleClick();
    }

    return (
        <Styles.Container>
            {activeChallenge ? (
                <Styles.ChallangeActive>
                    <Styles.Header>
                        Ganhe {activeChallenge.amount} xp
                    </Styles.Header>
                    <Styles.Main>
                        {activeChallenge.type == 'body' ? (
                            <Styles.Icon src="icons/body.svg" alt="Body" />
                        ) : (
                                <Styles.Icon src="icons/eye.svg" alt="Eye" />
                            )}
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>

                        <Styles.Footer>
                            <Styles.ButtonFailed onClick={handleChallengeFailed}>Falhei</Styles.ButtonFailed>
                            <Styles.ButtonSuccess onClick={handleChallengeSucceeded}>Completei</Styles.ButtonSuccess>
                        </Styles.Footer>
                    </Styles.Main>
                </Styles.ChallangeActive>
            ) : (
                    <Styles.ChallangeNotActive>
                        <Styles.TextStrong>
                            Inicie um ciclo para receber desafios a serem completados
                        </Styles.TextStrong>
                        <Styles.SubText>
                            <Styles.IconLevelUp src="icons/level-up.svg" alt="levelUp" />
                            <p>
                                Avance de level completando desafios
                            </p>
                        </Styles.SubText>
                    </Styles.ChallangeNotActive>
                )
            }
        </Styles.Container>
    )
}