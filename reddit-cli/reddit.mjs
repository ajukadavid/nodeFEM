#! /usr/bin/env node
import fetch from "node-fetch";
import open from 'open'
import yargs from "yargs";

const { argv } = yargs(process.argv)

const res = await fetch('https://reddit.com/.json')
const data = await res.json()


console.log(data)