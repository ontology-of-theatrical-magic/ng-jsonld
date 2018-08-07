import { Injectable } from '@angular/core';
import { promises, JsonLd, CompactOptions, ExpandOptions, FlattenOptions,
         FrameOptions, NormalizeOptions, ToRdfOptions, FromRdfOptions } from 'jsonld';
import { Promise as ES6Promise } from 'es6-promise';

/*
  Angular provider/shim for the ES6-Promise API of the CommonJS module jsonld.js, by Digital Bazaar.
  Source of jsonld.js: https://github.com/digitalbazaar/jsonld.js
*/

@Injectable()
export class JSONLDservice {

  constructor() {}

  compact(documentToCompact: JsonLd | string, context: JsonLd | string, options?: CompactOptions): Promise<JsonLd> {
    if (options) {
      return es6ToTypescriptPromise<JsonLd>(promises.compact(documentToCompact, context, options));
    } else {
      return es6ToTypescriptPromise<JsonLd>(promises.compact(documentToCompact, context));
    }
  }

  expand(compacted: JsonLd | string, options?: ExpandOptions): Promise<JsonLd> {
    if (options) {
      return es6ToTypescriptPromise<JsonLd>(promises.expand(compacted, options));
    } else {
      return es6ToTypescriptPromise<JsonLd>(promises.expand(compacted));
    }
  }

  flatten(doc: JsonLd, options?: FlattenOptions): Promise<JsonLd> {
    if (options) {
      return es6ToTypescriptPromise<JsonLd>(promises.flatten(doc, options));
    } else {
      return es6ToTypescriptPromise<JsonLd>(promises.flatten(doc));
    }
  }

  frame(doc: JsonLd, frame: JsonLd, options?: FrameOptions): Promise<JsonLd> {
    if (options) {
      return es6ToTypescriptPromise<JsonLd>(promises.frame(doc, frame, options));
    } else {
      return es6ToTypescriptPromise<JsonLd>(promises.frame(doc, frame));
    }
  }

  normalize(doc: JsonLd, options?: NormalizeOptions): Promise<JsonLd> {
    if (options) {
      return es6ToTypescriptPromise<JsonLd>(promises.normalize(doc, options));
    } else {
      return es6ToTypescriptPromise<JsonLd>(promises.normalize(doc));
    }
  }

  toRDF(doc: JsonLd, options?: ToRdfOptions): Promise<string> {
    if (options) {
      return es6ToTypescriptPromise<string>(promises.toRDF(doc, options));
    } else {
      return es6ToTypescriptPromise<string>(promises.toRDF(doc));
    }
  }

  fromRDF(nquads: string, options?: FromRdfOptions): Promise<JsonLd> {
    if (options) {
      return es6ToTypescriptPromise<JsonLd>(promises.fromRDF(nquads, options));
    } else {
      return es6ToTypescriptPromise<JsonLd>(promises.fromRDF(nquads));
    }
  }

}

function es6ToTypescriptPromise<T>(es6Promise: ES6Promise<T>): Promise<T> {
  return Promise.resolve<T>(es6Promise);
}
