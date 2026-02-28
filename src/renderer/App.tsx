import { type FormEvent, useEffect, useMemo, useState } from 'react';
import type { JobLog } from '../shared/types';

export function App() {
  const [logs, setLogs] = useState<JobLog[]>([]);
  const [showPalette, setShowPalette] = useState(false);
  const [workflowName, setWorkflowName] = useState('');
  const [recipient, setRecipient] = useState('');
  const [messageTemplate, setMessageTemplate] = useState('');

  useEffect(() => {
    void window.decide.listLogs().then(setLogs);
    const unsubscribe = window.decide.onLogCreated((log) => {
      setLogs((current) => [log, ...current]);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setShowPalette((value) => !value);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const emptyState = useMemo(() => logs.length === 0, [logs]);

  const submitWorkflow = async (event: FormEvent) => {
    event.preventDefault();
    await window.decide.createWorkflow({ workflowName, recipient, messageTemplate });
    setWorkflowName('');
    setRecipient('');
    setMessageTemplate('');
  };

  return (
    <main className="layout">
      <header>
        <h1>Decide MVP Desktop</h1>
        <p>Local-first workflow runner. Press Cmd/Ctrl+K to open quick command palette.</p>
      </header>

      <section className="card integrations">
        <h2>Integrations</h2>
        <div className="row">
          <button onClick={() => void window.decide.connectGoogleDrive()}>Connect Google Drive</button>
          <button onClick={() => void window.decide.connectWhatsApp()}>Connect WhatsApp</button>
        </div>
      </section>

      <section className="card">
        <h2>Create Workflow (stub)</h2>
        <form onSubmit={submitWorkflow} className="workflow-form">
          <input
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
            placeholder="Workflow name"
            required
          />
          <input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="WhatsApp recipient"
            required
          />
          <input
            value={messageTemplate}
            onChange={(e) => setMessageTemplate(e.target.value)}
            placeholder="Message template"
            required
          />
          <button type="submit">Create Workflow</button>
        </form>
      </section>

      <section className="card jobs">
        <h2>Jobs Log</h2>
        {emptyState ? <p className="muted">No jobs yet.</p> : null}
        <ul>
          {logs.map((log) => (
            <li key={log.id}>
              <strong>{log.level.toUpperCase()}</strong>
              <span>{new Date(log.createdAt).toLocaleString()}</span>
              <p>{log.message}</p>
            </li>
          ))}
        </ul>
      </section>

      {showPalette ? (
        <div className="palette-overlay" onClick={() => setShowPalette(false)}>
          <div className="palette" onClick={(e) => e.stopPropagation()}>
            <label htmlFor="command">Command</label>
            <input
              id="command"
              placeholder="e.g. Watch exports and send latest render to Ash"
              autoFocus
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
