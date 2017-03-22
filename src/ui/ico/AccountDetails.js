import React from 'react';
import './AccountDetails.scss';
import cms from '../../cms';

export default () => {
    return cms(__filename)(
        <div>
            <div className="row">
                <div className="col-md-5 col-md-offset-2">
                    Beneficiary
                </div>
                <div className="col-md-3">
                    NEUFUND
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 col-md-offset-2">
                    IBAN
                </div>
                <div className="col-md-3">
                    EE 12 3456 7890 1234 5678 7890 1234
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 col-md-offset-2">
                    BIC
                </div>
                <div className="col-md-3">
                    TLXXXXXX
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 col-md-offset-2">
                    Copy this to your transfer reference:
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-md-offset-2">
                    Reference
                </div>
                <div className="col-md-3">
                    VC 12345678
                </div>
                <div className="col-md-2">
                    Do not forget this
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 col-md-offset-2">
                    You agreed to buy
                </div>
                <div className="col-md-3">
                    NM 1 000 000 + 15% bonus
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 col-md-offset-2">
                    for
                </div>
                <div className="col-md-3">
                    e 1 000 000
                </div>
            </div>

            <div className="row">
                <div className="col-md-7 col-md-offset-2">
                    Standard bank fees apply
                </div>
            </div>
        </div>
    )
};