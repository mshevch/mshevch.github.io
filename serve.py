#!/usr/bin/env python3
"""
Local preview server for the art portfolio site.

Usage:
    python3 serve.py            # serves on http://localhost:8000
    python3 serve.py 5500       # serves on a custom port

Then open the printed URL in your browser. Ctrl+C to stop.
No installs needed — this only uses Python's standard library.
"""

import http.server
import socketserver
import sys
import webbrowser
import os

DEFAULT_PORT = 8000


def main():
    port = DEFAULT_PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print(f"Ignoring invalid port '{sys.argv[1]}', using {DEFAULT_PORT}")

    # Serve from the folder this script lives in, so it works
    # regardless of where you run it from.
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    handler = http.server.SimpleHTTPRequestHandler

    # Avoid "Address already in use" errors when restarting quickly
    class ReusableServer(socketserver.TCPServer):
        allow_reuse_address = True

    with ReusableServer(("", port), handler) as httpd:
        url = f"http://localhost:{port}"
        print(f"Serving the site at {url}")
        print("Press Ctrl+C to stop.\n")
        try:
            webbrowser.open(url)
        except Exception:
            pass  # fine if this fails, e.g. headless machine
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping server.")


if __name__ == "__main__":
    main()
