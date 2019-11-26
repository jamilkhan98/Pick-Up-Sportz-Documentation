import React from 'react';
import SimpleBarReact from "simplebar-react";
import "./Page.css"
import "simplebar/src/simplebar.css";
import { Button } from 'react-bootstrap';

export const Schedule = () => (
    <div>
        <h2>Schedule</h2>
        <div className="schedule-wrapper">
            <div className="simplebar-wrapper">
                <SimpleBarReact style={{ maxHeight: 800 }}>
                    <div className="schedule">
                        {[...Array(50)].map((x, i) => (
                            <button type="submit">Event #{i}</button>
                        ))}
                    </div>
                </SimpleBarReact>
            </div>
        </div>
        <div className="schedule-footer">
            <button type="submit">Delete</button>
        </div>
    </div>
)
