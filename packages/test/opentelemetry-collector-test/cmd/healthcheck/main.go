package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"time"
)

func main() {
	url := "http://localhost:13133"
	if len(os.Args) > 1 {
		url = os.Args[1]
	}

	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
	if err != nil {
		log.Fatalf("Failed to create HTTP request: %v", err)
	}

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		log.Fatalf("HTTP request failed: %v", err)
	}

	if res.StatusCode != http.StatusOK {
		log.Fatal("Not OK")
	}

	log.Print("OK")
}
