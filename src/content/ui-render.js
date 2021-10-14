import $ from 'jquery';
import {colortween} from "./colors.js";
import {
  getDivId,
  passiveSkillsItemBlock,
  saveDcItemBlock,
  savingThrowsItemBlock,
  senseItem,
  speedItemBlock
} from './ui-templates';

export const setAC = (characterId, ac) => {
  const divId = getDivId(characterId);
  $(`#${divId}`)
    .find('.ddbdms__ac .ddbdms__value')
    .text(ac);
};

export const setInitiative = (characterId, initiative) => {
  const divId = getDivId(characterId);
  $(`#${divId}`)
    .find('.ddbdms__initiative .ddbdms__initiative__value')
    .text(Math.abs(initiative));

  $(`#${divId}`)
    .find('.ddbdms__initiative .ddbdms__sign')
    .text(initiative >= 0 ? '+' : '-');
};

export const setHP = (characterId, currentHP, maxHP) => {
  const divId = getDivId(characterId);
  const healthiness = 1 - (currentHP / maxHP);
  $(`#${divId}`)
    .find('.ddbdms__hp .ddbdms__hp__current')
    .css('color', colortween("#FFFFFF", "#C65854", healthiness))
    .text(currentHP);

  $(`#${divId}`)
    .find('.ddbdms__hp .ddbdms__hp_max')
    .text(maxHP);
};

export const setSpeeds = (characterId, speeds) => {
  const divId = getDivId(characterId);
  const html = speeds
    .map(({ type, value }) => speedItemBlock(type, value))
    .join('');

  $(`#${divId}`)
    .find('.ddbdms__speed .ddbdms__inlineGroup')
    .html(html);
};

export const setDcSaves = (characterId, dcSaves) => {
  const divId = getDivId(characterId);
  const html = dcSaves
    .map(({ type, value }) => saveDcItemBlock(type, value))
    .join('');

  $(`#${divId}`)
    .find('.ddbdms__savedc .ddbdms__inlineGroup')
    .html(html);
};

export const setSavingThrows = (characterId, savingThrows) => {
  const divId = getDivId(characterId);
  const html = savingThrows
    .map(({ type, value }) => savingThrowsItemBlock(type, value))
    .join('');

  $(`#${divId}`)
    .find('.ddbdms__savingThrow .ddbdms__inlineGroup')
    .html(html);
};

export const setPassiveSkills = (characterId, passiveSkills) => {
  const divId = getDivId(characterId);
  const html = passiveSkills
    .map(({ type, value, bonus }) => passiveSkillsItemBlock(type, value, bonus))
    .join('');

  $(`#${divId}`)
    .find('.ddbdms__passiveSkills .ddbdms__inlineGroup')
    .html(html);
};

export const setSenses = (characterId, senses) => {
  const divId = getDivId(characterId);
  const html = senses.map(senseItem).join('');

  $(`#${divId}`)
    .find('.ddbdms__passiveSkills .ddbdms__senses')
    .html(html);
};

export const setElectrum = (characterId, electrum) => {
  const divId = getDivId(characterId);
  $(`#${divId}`)
    .find('.ddbdms__electrum .ddbdms__value')
    .text(electrum);
};
