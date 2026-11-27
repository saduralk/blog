---
title: "IT Foundations: Lesson 5"
category: "Information Technology Journey"
date: "11/26/2026"
---

# IT Foundations: Lesson 5

- **Learning journey:** Information Technology and CompTIA A+ preparation
- **Lesson:** 5 - Network troubleshooting and connectivity problems
- **Level:** Beginner
- **Environment:** Windows 11
- **Goal:** Build toward an IT position by February 2027
- **Main topic:** Troubleshooting network problems methodically

Lesson five focuses on an important IT skill: troubleshooting without guessing. When someone reports that their computer cannot connect to the internet, the cause might be as simple as a loose cable or as involved as a DNS or routing problem. A structured process helps narrow down the cause while avoiding unnecessary changes.

## The CompTIA troubleshooting process

CompTIA describes a six-step troubleshooting methodology:

| Step | Action | Example |
\
| --- | --- | --- |
\
| 1. Identify the problem | Gather symptoms and ask what changed | Websites do not load, but email still works |
\
| 2. Establish a theory | Consider a probable cause | DNS might not be responding |
\
| 3. Test the theory | Gather evidence to confirm or rule it out | Run `nslookup google.com` |
\
| 4. Plan and implement a solution | Choose a fix and consider its effects | Correct an incorrect DNS setting |
\
| 5. Verify and prevent | Confirm full functionality and consider prevention | Test websites and other network applications |
\
| 6. Document | Record findings, actions, and outcomes | Note the DNS setting and how it was corrected |

Troubleshooting is not complete just because one symptom goes away. The technician should verify that the system works as expected and document the result.

### Why documentation matters

Suppose a user's laptop repeatedly disconnects from Wi-Fi. A technician identifies an outdated wireless driver, updates it, and confirms the connection is stable.

Documenting the symptoms, investigation, and resolution helps another technician if the issue returns. Documentation can also reveal recurring problems across multiple users or devices.

**Student takeaway:** A good technician fixes the immediate problem and leaves useful information for the next person.

## Common network connectivity problems

### No network connectivity

**Possible symptoms:**

- No internet access
- Cannot reach other devices on the network
- The network icon shows disconnected
- The computer has no valid network configuration

**Possible causes:**

- Disconnected Ethernet cable
- Disabled network adapter or Wi-Fi
- Faulty router or switch
- DHCP failure
- Network driver problem

**Initial checks:**

1. Check the Ethernet cable or confirm Wi-Fi is enabled.
2. Verify that the network adapter is enabled.
3. Run `ipconfig` and inspect the address and gateway.
4. Test communication with the default gateway.
5. Investigate the router, switch, or DHCP service if needed.

An IPv4 address beginning with `169.254` is a clue that Windows may not have received an address from DHCP. It points toward an area to investigate, but does not prove the exact cause.

### Intermittent connectivity

**Possible symptoms:**

- Connection drops and reconnects
- Video calls freeze
- Games experience sudden lag
- Internet works only some of the time

**Possible causes:**

- Weak Wi-Fi signal
- Wireless interference
- Damaged Ethernet cable
- Faulty network equipment
- Overloaded wireless network
- Driver or firmware problems

Intermittent connectivity does not automatically mean the ISP is at fault. For example, moving closer to the access point may resolve a weak Wi-Fi signal without any change to the internet service.

### Slow network performance

**Possible symptoms:**

- Websites load slowly
- Downloads take longer than expected
- Applications respond with delays
- Video streams buffer frequently

**Possible causes:**

- Network congestion
- Limited bandwidth
- Weak wireless signal
- Hardware limitations
- Background downloads
- ISP problems

Two useful terms:

- **Bandwidth** is the amount of data a connection can carry over time.
- **Latency** is the time it takes data to travel from one point to another.

Think of bandwidth as the width of a highway and latency as the time it takes a car to reach its destination. A connection can have high bandwidth and still have high latency.

### DNS resolution failure

**Possible symptoms:**

- Websites do not load when entered by domain name
- Some applications may still connect using IP addresses
- `nslookup` fails or returns unexpected results

**Possible causes:**

- DNS server unavailable
- Incorrect DNS configuration
- Stale local DNS cache
- General network connectivity problems

Useful commands:

```cmd
nslookup google.com
ipconfig /flushdns
```

`nslookup` checks DNS resolution. `ipconfig /flushdns` clears Windows' local DNS resolver cache so the computer can request fresh information.

Flushing the cache does not fix an unavailable DNS server. It only clears locally stored DNS entries.

## Windows network troubleshooting commands

These commands provide different kinds of evidence:

| Command | Purpose |
\
| --- | --- |
\
| `ipconfig` | View basic IP configuration |
\
| `ipconfig /all` | View detailed adapter configuration |
\
| `ipconfig /release` | Release a DHCP-assigned IPv4 address |
\
| `ipconfig /renew` | Request a new DHCP IPv4 configuration |
\
| `ipconfig /flushdns` | Clear the DNS resolver cache |
\
| `ping` | Test reachability using ICMP |
\
| `tracert` | Trace the route toward a destination |
\
| `pathping` | Trace a route and gather packet-loss and latency statistics |
\
| `nslookup` | Query DNS |
\
| `netstat -ano` | View network connections and associated process IDs |

Use these commands to gather evidence, not as automatic fixes. Commands such as `/release` and `/renew` change the computer's DHCP lease state, so they should be used with an understanding of the environment and the effect they may have.

### `tracert`: trace the route

Run:

```cmd
tracert google.com
```

`tracert` shows the network hops that probes take toward a destination. A **hop** is a step from one router to another along a network path.

Each numbered line represents a hop. The times show measured round-trip times for the probes.

If a hop displays:

```text
* * * Request timed out.
```

that does not automatically mean the network is broken. Some routers do not respond to traceroute probes or filter them, even while forwarding ordinary traffic.

### `pathping`: investigate a route

Run:

```cmd
pathping google.com
```

`pathping` combines parts of `ping` and `tracert`. It traces the route and gathers statistics about latency and packet loss. It may take a few minutes to finish.

It can help investigate:

- Packet loss
- An unstable network path
- Possible problem areas between routers

Network devices may handle diagnostic probes differently from normal application traffic. Interpret the results as clues rather than treating every reported loss as proof that a device is faulty.

### Clearing the DNS cache

Windows stores recently resolved DNS information locally in the **DNS resolver cache**. This avoids repeatedly looking up the same names.

Run:

```cmd
ipconfig /flushdns
```

Windows should report that the DNS Resolver Cache was flushed. Then test resolution again:

```cmd
nslookup google.com
```

## Isolating where the problem exists

When a computer cannot access the internet, test connectivity in stages:

1. **The computer:** Is the adapter enabled, and does it have a usable IP configuration?
2. **The default gateway:** Can the computer reach the local router?
3. **An external IP address:** Can traffic get beyond the local network?
4. **A domain name:** Can DNS resolve a website name?

Example sequence:

```cmd
ipconfig
ping 192.168.1.1
ping 1.1.1.1
ping google.com
```

Replace `192.168.1.1` with the actual default gateway from `ipconfig`.

| Result | Possible interpretation |
\
| --- | --- |
\
| Gateway ping fails | Local connection, adapter, or gateway issue |
\
| Gateway works, external IP fails | Router, ISP, or upstream routing issue |
\
| External IP works, domain fails | Possible DNS issue |
\
| All tests work | Basic connectivity and name resolution are functioning |

These results are diagnostic clues, not absolute rules. Firewalls, ICMP filtering, and network policies can affect ping results. A failed ping does not necessarily mean a service or device is unavailable.

## Practical lab: investigate a network

Open Command Prompt on the Windows 11 computer and try the following exercises.

### Exercise A: trace a network route

Run:

```cmd
tracert google.com
```

Observe:

- How many hops appear
- Whether the first hop matches the default gateway
- Whether any hops show `* * *`
- Whether the destination is reached

### Exercise B: investigate packet loss

Run:

```cmd
pathping 1.1.1.1
```

This may take a few minutes. Observe the route, any packet loss reported, and whether intermediate hops appear to have loss.

### Exercise C: clear and retest DNS

Run:

```cmd
ipconfig /flushdns
```

Then run:

```cmd
nslookup google.com
```

Check whether Windows cleared the cache and whether the domain still resolves afterward.

## Privacy note

Before sharing command output, redact public IP addresses, MAC addresses, host names, account names, and other identifying details. General outcomes—such as whether the gateway replied or DNS resolved—are usually enough for discussion.

## What I learned

This lesson helped me practice a methodical approach to network troubleshooting:

1. Use a structured process: identify, theorize, test, fix, verify, and document.
2. Treat symptoms such as intermittent connectivity and slow performance as clues, not conclusions.
3. Use `tracert` to inspect a route and `pathping` to investigate latency and packet loss.
4. Use `ipconfig /flushdns` to clear the local DNS cache, while remembering that it cannot repair an unavailable DNS server.
5. Test from the local adapter to the gateway, then to an external IP address, and finally to a domain name.
6. Interpret diagnostic results carefully because firewalls and network policies can affect them.

Building this troubleshooting mindset is an important step toward preparing for CompTIA A+ and becoming employable in IT by February 2027.
