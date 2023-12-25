import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

import "./App.css";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollContainer>
      <div class="parallax">
        <div class="parallax-background"></div>
        <div class="parallax-overlay"></div>
        <div class="parallax-content">
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <div className="content">
                <span style={{ fontSize: "60px" }}>🔒</span>
                <span
                  style={{
                    fontSize: "30px",
                    margin: "16px 0px",
                    fontWeight: 500,
                  }}
                >
                  Contenuto bloccato.
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: 400,
                  }}
                >
                  Psst...scrolla piano la pagina
                </span>
                <span style={{ fontSize: "40px" }}>😉</span>
              </div>
            </Animator>
          </ScrollPage>
        </div>
      </div>
      <ScrollPage page={1}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span
            style={{
              fontSize: "30px",
              padding: "1em",
              color: "#131200",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            <Animator animation={MoveIn(1000, 0)}>
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Quindi vuoi conoscere la destinazione?
                <span style={{ fontSize: "70px" }}>🙋🏻‍♀️</span>
              </div>
            </Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            background: "#296EB4",
          }}
        >
          <span
            style={{
              fontSize: "30px",
              padding: "1em",
              color: "white",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            <Animator animation={MoveIn(1000, 0)}>
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Veramente? <span style={{ fontSize: "70px" }}>🧐</span>
              </div>
            </Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            background: "#D7AF70",
          }}
        >
          <span
            style={{
              fontSize: "30px",
              padding: "1em",
              color: "#fff",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            <Animator animation={batch(MoveOut(220, 100))}>
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Sicura sicura? <span style={{ fontSize: "70px" }}>😡</span>
              </div>
            </Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            background: "#8F250C",
          }}
        >
          <span
            style={{
              fontSize: "30px",
              padding: "1em",
              color: "#fff",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            <Animator animation={MoveIn(1000, 0)}>
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  Ooook... <span style={{ fontSize: "90px" }}>🤗</span>
                </div>
              </div>
            </Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
            backgroundImage: "url('../public//Siviglia/Siviglia_6.jpg')",
          }}
        >
          <Animator animation={ZoomInScrollOut}>
            <img src="./andalucia.svg" width={"250px"} />
          </Animator>
        </div>
      </ScrollPage>
      <div class="parallax-2">
        <div class="parallax-background-2"></div>
        <div class="parallax-content-2">
          <ScrollPage page={6}>
            <Animator animation={FadeUp}>
              <span
                style={{
                  fontSize: "50px",
                  display: "flex",
                  aligItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                AAAAAAHHH 🤩🤩
              </span>
            </Animator>
          </ScrollPage>
        </div>
      </div>
      <ScrollPage page={7}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: "30px" }}>
            <Animator animation={MoveIn(-1000, 0)}>
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Guarda l'itinerario ✈️<span> 💛💛💛</span>
              </div>
            </Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={8}>
        <div className="section-alhambra">
          <h2>
            <Animator animation={MoveIn(-1000, 0)}>Day 1</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Dante Chun -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </h2>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "30px" }}>Auguri </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
