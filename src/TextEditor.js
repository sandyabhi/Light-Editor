import React, { useState } from 'react';
import './App.css';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html'

function TextEditor() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

    const handleEditorChange = (state) => {
        setEditorState(state)
    }

    return (
        <>
            <Editor
                defaultEditorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
            <div className="preview">
                <textarea className="previewtext" value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}></textarea>
            </div>
        </>
    )
}

export default TextEditor
