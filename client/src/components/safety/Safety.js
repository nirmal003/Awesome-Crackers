import React from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import "./safety.css";

function Safety() {
  return (
    <>
      <div className="safetytips">
        <div className="cntnr pad">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <h1 className="acme text-center text-white safety">
                Safety Tips
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-2 ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 pb-4 text-start">
            <h2 className="acme heading1 pb-3 clr-red">Awesome Crackers</h2>
            <p className="roboto">
              There are certain Dos &amp; Don'ts to follow while purchasing,
              bursting and storing crackers. Thus, it is very important to
              follow the precautions while bursting crackers. A little
              negligence, ignorance and carelessness can cause a fatal injury.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-12 text-start ">
            <h3 className="block-head acme font fw-bold">Do's</h3>

            <div className="text4 pt-4">
              <div>
                <ImCheckmark className="icnclr1 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">Instructions</h1>
                <p className="roboto pl">
                  Display fireworks as per the instructions mentioned on the
                  pack.
                </p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCheckmark className="icnclr1 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">Outdoor</h1>
                <p className="roboto pl">Use fireworks only outdoor.</p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCheckmark className="icnclr1 fw-bold" />
              </div>
              <div className="robotoc fn text-start">
                <h1 className="acme fw-bold heading5 pl">Branded Fireworks</h1>
                <p className="roboto pl ">
                  Buy fireworks from authorized / reputed manufacturers only.
                </p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCheckmark className="icnclr1 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">Distance</h1>
                <p className="roboto pl">
                  Light only one firework at a time, by one person. Others
                  should watch from a safe distance.
                </p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCheckmark className="icnclr1 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">Supervision</h1>
                <p className="roboto pl">Always have adult supervision.</p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCheckmark className="icnclr1 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">Water</h1>
                <p className="roboto pl">
                  Keep two buckets of water handy. In the event of fire or any
                  mishap.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12 text-start">
            <h3 className="block-head acme font fw-bold">Don'ts</h3>

            <div className="text4 pt-4 ">
              <div>
                <ImCross className="icnclr2 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">Don't make tricks</h1>
                <p className="roboto pl">Never make your own fireworks.</p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCross className="icnclr2 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">Don't relight</h1>
                <p className="roboto pl">
                  Never try to re-light or pick up fireworks that have not
                  ignited fully.
                </p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCross className="icnclr2 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">Don't carry it</h1>
                <p className="roboto pl">
                  Never carry fireworks in your pockets
                </p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCross className="icnclr2 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">Don't Touch it</h1>
                <p className="roboto pl">
                  After fireworks display never pick up fireworks that may be
                  left over, they still may be active.
                </p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCross className="icnclr2 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">
                  Do not use Glass / Metal
                </h1>
                <p className="roboto pl">
                  Never shoot fireworks in a metal or glass containers.
                </p>
              </div>
            </div>

            <div className="text4 pt-3">
              <div>
                <ImCross className="icnclr2 fw-bold" />
              </div>
              <div className="roboto fn text-start">
                <h1 className="acme fw-bold heading5 pl">
                  Don't wear loose clothes
                </h1>
                <p className="roboto pl">
                  Do not wear loose clothing while using fireworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Safety;
