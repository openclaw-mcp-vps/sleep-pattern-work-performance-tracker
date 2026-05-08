import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SleepSync — Correlate Sleep Data with Work Productivity',
  description: 'Connect your sleep tracker with calendar and task data to discover how sleep quality affects your meeting performance and task completion rates.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c0310483-423a-4c27-96fc-9e34d9500991"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
