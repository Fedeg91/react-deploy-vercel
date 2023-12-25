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
            height: "100%",
            backgroundImage: "url('../public//Siviglia/Siviglia_6.jpg')",
          }}
        >
          <Animator animation={ZoomInScrollOut}>
            <img src="./andalucia.svg" width={"230px"} />
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
                  fontSize: "35px",
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
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            padding: "2em",
          }}
        >
          <span style={{ fontSize: "30px" }}>
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
          </span>
        </div>
      </div>

      <ScrollPage page={8}>
        <div className="section-alhambra">
          <Animator animation={MoveIn(-1000, 0)}>
            <h3>Day 1</h3>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <h1>Granada</h1>
            <p style={{ fontSize: "24px" }}>Visita della città e Albaizin</p>
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={9}>
        <div className="section-alhambra">
          <Animator animation={MoveIn(-1000, 0)}>
            <h2>Day 2</h2>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <h1>Alhambra</h1>
            <p style={{ fontSize: "24px" }}>Visita del castello</p>
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={10}>
        <div className="section-cordoba">
          <Animator animation={MoveIn(-1000, 0)}>
            <h3>Day 3</h3>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <h1>Cordoba</h1>
            <p style={{ fontSize: "24px" }}>
              Visita della Mezquita e della juderia
            </p>
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={11}>
        <div className="section-cordoba">
          <Animator animation={MoveIn(-1000, 0)}>
            <h2>Day 4</h2>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <h1>Mezquita</h1>
            <p style={{ fontSize: "24px" }}>
              Altro giro in città e partenza per...
            </p>
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={10}>
        <div className="section-sevilla">
          <Animator animation={MoveIn(-1000, 0)}>
            <h3>Day 5</h3>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <h1>Alcazer</h1>
            <p style={{ fontSize: "24px" }}>
              Visita della città e dell'Alcazer
            </p>
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={11}>
        <div className="section-sevilla">
          <Animator animation={MoveIn(-1000, 0)}>
            <h2>Day 6</h2>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <h1>Sevilla</h1>
            <p style={{ fontSize: "24px" }}>giro e città e adios espana</p>
          </Animator>
        </div>
      </ScrollPage>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            fontWeight: 600,
            textAlign: "center",
            justifyContent: "center",

            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "100vh",
          }}
        >
          <span style={{ fontSize: "50px" }}>🎅🏻</span>OH-OH-OH !
          <button className="button">Scarica il biglietto qui</button>
        </div>
      </div>
    </ScrollContainer>
  );
}

export default App;
