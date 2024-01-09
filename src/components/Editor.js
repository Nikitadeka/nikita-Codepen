import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
    const { language, displayName, value, onChange } = props;
    const [showSection1, setShowSection1] = useState(false);
    const [showSection2, setShowSection2] = useState(false);
    const [showSection3, setShowSection3] = useState(false);

    const[open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value);
    }

    const toggleSection = (sectionNumber) => {
        switch (sectionNumber) {
            case 1:
                setShowSection1(!showSection1);
                break;
            case 2:
                setShowSection2(!showSection2);
                break;
            case 3:
                setShowSection3(!showSection3);
                break;
            default:
               break;
        }
    };
    return (
        <div className={`editor-container ${open ? ' ' : 'collapsed'}` }>
            <div className="editor-title">
                {displayName}
                <button 
                type="button"
                className="expand-collapse-btn"
                onClick={() => setOpen(prevOpen => !prevOpen)}
                
                
                >
                 <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
    </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
            {showSection1&& (
                <div>
                    {/* Section 1 content */}
                    Section 1
                </div>
            )}
            
            
        </div>
    );
            }