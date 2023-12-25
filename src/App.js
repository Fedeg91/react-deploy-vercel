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
                <span style={{ fontSize: "70px" }}>🔒</span>
                <span
                  style={{
                    fontSize: "40px",
                    margin: "16px 0px",
                    fontWeight: 500,
                  }}
                >
                  Contenuto bloccato.
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: 400,
                  }}
                >
                  Psst...scrolla piano la pagina
                </span>
                <span style={{ fontSize: "50px" }}>😉</span>
              </div>
            </Animator>
          </ScrollPage>
        </div>
      </div>
      <ScrollPage page={2}>
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
              fontSize: "40px",
              padding: "1em",
              color: "#131200",
              textAlign: "center",
            }}
          >
            <Animator animation={MoveIn(1000, 0)}>
              Quindi vuoi conoscere la destinazione?
              <span style={{ fontSize: "100px" }}>🙋🏻‍♀️</span>
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
            background: "#296EB4",
          }}
        >
          <span
            style={{
              fontSize: "40px",
              padding: "1em",
              color: "white",
              textAlign: "center",
            }}
          >
            <Animator animation={MoveIn(1000, 0)}>
              Veramente? <span style={{ fontSize: "100px" }}>🧐</span>
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
              fontSize: "40px",
              padding: "1em",
              color: "white",
              textAlign: "center",
            }}
          >
            <Animator animation={MoveIn(1000, 0)}>
              Sicura sicura? <span style={{ fontSize: "100px" }}>😡</span>
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
            background: "#8F250C",
          }}
        >
          <span
            style={{
              fontSize: "40px",
              padding: "1em",
              color: "white",
              textAlign: "center",
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
                Ooook <span style={{ fontSize: "120px" }}>🤗</span>
              </div>
            </Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={1}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
            background: "#fff",
          }}
        >
          <Animator animation={ZoomInScrollOut}>
            <img src="./andalucia.svg" width={"250px"} />
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage>
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
      <ScrollPage page={2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Dante Chun -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={3}>
        <div className="section-3">
          <h2>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
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
